import Icon from './ui/Icon.jsx';

const pillars = [
  { icon: 'scissors', title: 'Precision', text: 'Every cut is a statement of intention. Not a millimeter wasted.' },
  { icon: 'heart', title: 'Care', text: 'Your comfort, your story — woven into every appointment we take.' },
  { icon: 'star', title: 'Artistry', text: 'Trained in the world\'s finest salons, we bring editorial craft to everyday living.' },
];

export default function Editorial() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        padding: 'var(--section-pad)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative bg shape */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(207,122,90,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          left: -40,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'rgba(184,150,90,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--accent)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
          Our Philosophy
        </div>

        {/* Main quote */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 68px)',
            fontWeight: 700,
            color: '#f3ede4',
            lineHeight: 1.1,
            letterSpacing: 0,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Not a chair.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            An hour back<br />to yourself.
          </em>
        </h2>

        <p
          style={{
            color: '#a08878',
            fontSize: 17,
            lineHeight: 1.75,
            maxWidth: 580,
            marginBottom: 64,
          }}
        >
          We believe beauty is not a correction. It is a recognition — of who you already are, expressed with
          a little more clarity. Silk &amp; Shears is where craft meets calm.
        </p>

        {/* Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 32,
            borderTop: '1px solid rgba(243,237,228,0.1)',
            paddingTop: 48,
          }}
        >
          {pillars.map((p) => (
            <div key={p.title}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--r-md)',
                  background: 'rgba(207,122,90,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <Icon name={p.icon} size={22} color="var(--accent)" />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#f3ede4',
                  marginBottom: 8,
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: '#8a7468', fontSize: 14, lineHeight: 1.7 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
