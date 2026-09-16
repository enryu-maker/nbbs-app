import { ImageResponse } from 'next/og';

export const alt = 'NB Business Solutions — Integrated MSME Business Solutions, Nashik';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#141a32',
        color: '#ffffff',
        fontFamily: 'serif',
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 8,
          textTransform: 'uppercase',
          color: '#e9c176',
        }}
      >
        NB Business Solutions
      </div>

      <div style={{ marginTop: 32, fontSize: 84, lineHeight: 1.05, display: 'flex' }}>
        From Diagnosis to Solution Implementation.
      </div>

      <div style={{ marginTop: 40, fontSize: 30, color: '#ffffffaa' }}>
        Business clarity for MSME founders · Nashik, Maharashtra
      </div>
    </div>,
    size,
  );
}
