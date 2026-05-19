import Photo from './ui/Photo.jsx';
import Icon from './ui/Icon.jsx';

const trust = [
  { label: '4.96 ★', sub: '2,140 reviews' },
  { label: '18', sub: 'master stylists' },
  { label: 'Est. 2014', sub: 'West Village, NY' },
  { label: '"A sanctuary"', sub: '— Vogue' },
];

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 96px) 24px 64px',
      }}
    >
      {/* Top tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--blush)',
          color: 'var(--accent-deep)',
          borderRadius: 'var(--r-full)',
          padding: '6px 16px',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 28,
        }}
      >
        <Icon name="scissors" size={12} color="var(--accent-deep)" />
        West Village · New York City
      </div>

      {/* Main layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(36px, 6vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* Left: headline */}
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 76px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'var(--ink)',
              letterSpacing: 0,
              marginBottom: 24,
            }}
          >
            The art of<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>being seen,</em>
            <br />softly.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: 'var(--ink-2)',
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            A quietly luxurious salon in the heart of the West Village. By appointment, with intention.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '14px 28px',
                borderRadius: 'var(--r-full)',
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'transform 0.15s, background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Reserve Your Chair
              <Icon name="arrow" size={16} color="var(--bg)" />
            </a>

            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: 'var(--ink-2)',
                padding: '14px 24px',
                borderRadius: 'var(--r-full)',
                border: '1.5px solid var(--peach)',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              View Services
            </a>
          </div>

          {/* Trust row */}
          <div
            style={{
              display: 'flex',
              gap: 28,
              marginTop: 52,
              flexWrap: 'wrap',
            }}
          >
            {trust.map((t) => (
              <div key={t.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--ink)',
                    lineHeight: 1.1,
                  }}
                >
                  {t.label}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo stack + floating card */}
        <div style={{ position: 'relative', minHeight: 420 }}>
          {/* Main photo */}
          <Photo kind="portrait" variant={0} height="clamp(380px, 42vw, 460px)" radius="var(--r-lg)" style={{ width: '100%' }} />

          {/* Accent photo (offset) */}
          <Photo
            kind="editorial"
            variant={4}
            width={160}
            height={200}
            radius="var(--r-md)"
            style={{
              position: 'absolute',
              bottom: -20,
              left: -18,
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid var(--surface)',
            }}
          />

          {/* Floating booking card */}
          <div
            style={{
              position: 'absolute',
              top: 28,
              right: 12,
              background: 'rgba(255,253,249,0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 'var(--r-md)',
              padding: '20px 22px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255,255,255,0.6)',
              minWidth: 200,
            }}
          >
            <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
              Next Available
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
              Today, 3:30 PM
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 16 }}>
              with Mira Kavanaugh
            </div>
            <button
              style={{
                width: '100%',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 'var(--r-full)',
                padding: '9px 0',
                fontSize: 13,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Book This Slot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
