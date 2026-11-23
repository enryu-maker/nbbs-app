'use client';

// Announcement popup managed from the ERP (NBBS Website → Popups).
// The ERP only returns popups that are active and inside their start/expiry window.
import { useEffect, useState } from 'react';

type Cta = { label: string; color: string; url: string };
type Popup = {
  id: number;
  text: string;
  text_color: string;
  bg_image: string;
  ctas: Cta[];
  // Older ERP responses lack these; the fallbacks are the original look.
  bg_color?: string;
  width?: number;
  min_height?: number;
  updated_at?: string;
};

const API = 'https://erp.nbbs.in/api/nbbs/popups/';
const DISMISS_KEY = (id: number) => `nbbs-popup-dismissed-${id}`;
// sessionStorage: a closed popup returns on the visitor's next visit. Keyed on
// updated_at so editing the popup in the ERP shows it again within the visit.
const version = (p: Popup) => p.updated_at || '1';

function isDismissed(p: Popup) {
  try {
    return sessionStorage.getItem(DISMISS_KEY(p.id)) === version(p);
  } catch {
    return false;
  }
}

// Links to this same website stay in the tab; only other sites open a new one.
function isExternal(url: string) {
  try {
    return new URL(url, window.location.href).origin !== window.location.origin;
  } catch {
    return false;
  }
}

// A visitor sent here by another NBBS site's popup has already seen one this visit.
const ARRIVED_KEY = 'nbbs-popup-arrived-from-popup';

function arrivedFromPopup() {
  try {
    if (new URLSearchParams(window.location.search).has('from_popup')) {
      sessionStorage.setItem(ARRIVED_KEY, '1');
    }
    return sessionStorage.getItem(ARRIVED_KEY) === '1';
  } catch {
    return false;
  }
}

// Tag links to other sites: from_popup hides the popup there, utm_* (unless the
// link already has its own) lets analytics count popup clicks.
function trackedHref(url: string, site: string, id: number) {
  if (!isExternal(url)) return url;
  try {
    const u = new URL(url, window.location.href);
    u.searchParams.set('from_popup', site);
    if (!u.searchParams.has('utm_source')) {
      u.searchParams.set('utm_source', site);
      u.searchParams.set('utm_medium', 'popup');
      u.searchParams.set('utm_campaign', `popup-${id}`);
    }
    return u.toString();
  } catch {
    return url;
  }
}

export default function SitePopup({ site }: { site: 'nbbs' | 'workshop' | 'opd' }) {
  const [popup, setPopup] = useState<Popup | null>(null);

  useEffect(() => {
    if (arrivedFromPopup()) return;
    const ctrl = new AbortController();
    fetch(`${API}?site=${site}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : []))
      .then((list: Popup[]) => setPopup(list.find((p) => !isDismissed(p)) ?? null))
      .catch(() => {});
    return () => ctrl.abort();
  }, [site]);

  function close() {
    if (!popup) return;
    try {
      sessionStorage.setItem(DISMISS_KEY(popup.id), version(popup));
    } catch {}
    setPopup(null);
  }

  useEffect(() => {
    if (!popup) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!popup) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Announcement"
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'grid',
        placeItems: 'center',
        padding: 16,
        background: 'rgba(0,0,0,0.55)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: popup.width || 440,
          minHeight: popup.min_height || 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 16,
          padding: 24,
          borderRadius: 16,
          overflow: 'hidden',
          backgroundColor: popup.bg_color || '#111827',
          backgroundImage: popup.bg_image ? `url("${popup.bg_image}")` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          autoFocus
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 32,
            height: 32,
            border: 0,
            borderRadius: 999,
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            fontSize: 20,
            lineHeight: 1,
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        {popup.text && (
          <p
            style={{
              margin: 0,
              whiteSpace: 'pre-wrap',
              color: popup.text_color,
              fontSize: 20,
              fontWeight: 600,
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            {popup.text}
          </p>
        )}
        {popup.ctas.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {popup.ctas.map((cta) => (
              <a
                key={cta.label + cta.url}
                href={trackedHref(cta.url, site, popup.id)}
                onClick={close}
                {...(isExternal(cta.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{
                  padding: '10px 18px',
                  borderRadius: 10,
                  background: cta.color,
                  color: '#fff',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
