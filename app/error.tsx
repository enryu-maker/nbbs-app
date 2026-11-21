'use client';

// Shown when an ERP request fails while rendering (the response stays a 5xx,
// which search engines treat as temporary). A full ERP outage is handled
// earlier by proxy.ts with the maintenance page.
import { useEffect } from 'react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <h1 style={{ fontSize: 26, margin: '0 0 10px' }}>This page is temporarily unavailable</h1>
        <p style={{ margin: '0 0 20px', lineHeight: 1.6, opacity: 0.8 }}>
          We couldn&apos;t load the latest content. Please try again in a moment.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          style={{
            padding: '12px 22px',
            borderRadius: 999,
            border: 0,
            background: '#223f74',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
