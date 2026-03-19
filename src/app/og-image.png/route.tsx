import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 40%, #16213e 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              L5
            </div>
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: 'white' }}>
              Agency Level 5
            </span>
          </div>
          <div
            style={{
              fontSize: '28px',
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            AI Chatbots · Workflow Automation · Smart Websites
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.5,
            }}
          >
            We build the systems that let your business scale without adding headcount.
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            gap: '40px',
            color: '#64748b',
            fontSize: '16px',
          }}
        >
          <span>agencylevel5.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
