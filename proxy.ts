import { NextResponse, type NextRequest } from 'next/server';

/**
 * ERP health gate. When the ERP (erp.nbbs.in) is down, every page answers
 * HTTP 503 + Retry-After with a maintenance page instead of stale or fake data.
 *
 * SEO: 503 is Google's "temporarily unavailable" signal - pages keep their
 * index and ranking; nothing is cached (no-store) and no noindex is sent.
 */

const SITE_NAME = 'NB Business Solutions';
const HEALTH_URL = (process.env.ERP_HEALTH_URL || 'https://erp.nbbs.in/api/health/').trim();
const TIMEOUT_MS = 3000;
const UP_TTL_MS = 30_000; // re-check a healthy ERP every 30s
const DOWN_TTL_MS = 10_000; // re-check a failing ERP every 10s
const RETRY_AFTER_S = 300;

// ponytail: per-process cache; each server instance checks on its own, which is fine for a few instances.
let cached: { up: boolean; at: number } | null = null;
let inflight: Promise<boolean> | null = null;

async function probe(): Promise<boolean> {
  try {
    const res = await fetch(HEALTH_URL, {
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { Accept: 'application/json' },
    });
    // 5xx = ERP/database/gateway failure. A 4xx still means the ERP is serving
    // requests, so it never takes the site down (e.g. during a deploy).
    return res.status < 500;
  } catch {
    return false; // network error, DNS failure, timeout
  }
}

async function erpIsUp(): Promise<boolean> {
  const now = Date.now();
  if (cached && now - cached.at < (cached.up ? UP_TTL_MS : DOWN_TTL_MS)) return cached.up;
  inflight ??= (async () => {
    // Two failed probes in a row before showing maintenance: one dropped packet is not an outage.
    const up = (await probe()) || (await probe());
    cached = { up, at: Date.now() };
    return up;
  })().finally(() => {
    inflight = null;
  });
  return inflight;
}

function maintenancePage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Under Maintenance | ${SITE_NAME}</title>
<meta name="description" content="${SITE_NAME} is briefly down for maintenance. Please check back in a few minutes.">
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px;
         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
         background: #f5f7fb; color: #1e2a44; }
  main { max-width: 520px; text-align: center; background: #fff; border-radius: 18px; padding: 44px 32px;
         box-shadow: 0 10px 40px rgba(34, 63, 116, 0.10); border-top: 6px solid #223f74; }
  .badge { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
           color: #223f74; background: #e8eef9; border-radius: 999px; padding: 6px 14px; margin-bottom: 18px; }
  h1 { font-size: 28px; line-height: 1.25; margin: 0 0 12px; }
  p { font-size: 16px; line-height: 1.6; color: #4a5672; margin: 0 0 22px; }
  .actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
  a, button { font: inherit; font-weight: 600; border-radius: 999px; padding: 12px 22px; text-decoration: none; cursor: pointer; }
  button { background: #223f74; color: #fff; border: 0; }
  a { color: #223f74; border: 1px solid #c9d3e3; }
  small { display: block; margin-top: 22px; color: #8090ad; font-size: 13px; }
</style>
</head>
<body>
<main>
  <span class="badge">Scheduled maintenance</span>
  <h1>We'll be right back</h1>
  <p>${SITE_NAME} is briefly unavailable while we work on our systems. Please try again in a few minutes.</p>
  <div class="actions">
    <button type="button" onclick="location.reload()">Try again</button>
    <a href="mailto:connect@nbbs.in">connect@nbbs.in</a>
  </div>
  <small>Need help now? Call / WhatsApp 9145789151</small>
</main>
<script>setTimeout(function () { location.reload(); }, ${RETRY_AFTER_S * 1000});</script>
</body>
</html>`;
}

export async function proxy(request: NextRequest) {
  if (await erpIsUp()) return NextResponse.next();

  const isPageRequest = (request.headers.get('accept') || '').includes('text/html');
  return new NextResponse(
    isPageRequest ? maintenancePage() : JSON.stringify({ error: 'maintenance' }),
    {
      status: 503,
      headers: {
        'Content-Type': isPageRequest ? 'text/html; charset=utf-8' : 'application/json',
        'Retry-After': String(RETRY_AFTER_S),
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}

export const config = {
  matcher: [
    // Everything except build assets and static files, so CSS/JS/images/fonts always load.
    '/((?!_next/static|_next/image|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|css|js|map|woff2?|ttf|otf|mp4|webm|pdf)$).*)',
  ],
};
