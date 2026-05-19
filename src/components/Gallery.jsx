import Photo from './ui/Photo.jsx';

const transformations = [
  { label: 'Balayage Transformation', before: 2, after: 1 },
  { label: 'Signature Precision Cut', before: 5, after: 0 },
  { label: 'Keratin Smoothing Ritual', before: 3, after: 4 },
];

function BeforeAfterCard({ item }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--peach)',
      }}
    >
      {/* Two-panel slider */}
      <div style={{ position: 'relative', display: 'flex', height: 280 }}>
        {/* Before */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <Photo kind="portrait" variant={item.before} height={280} radius={0} style={{ width: '100%' }} />
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: 'rgba(42,29,23,0.7)',
              color: '#f3ede4',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 'var(--r-full)',
            }}
          >
            Before
          </span>
        </div>

        {/* Divider line + handle */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translateX(-50%)',
            width: 2,
            background: '#fff',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              color: 'var(--accent)',
              fontWeight: 700,
              userSelect: 'none',
            }}
          >
            ↔
          </div>
        </div>

        {/* After */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <Photo kind="portrait" variant={item.after} height={280} radius={0} style={{ width: '100%' }} />
          <span
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 'var(--r-full)',
            }}
          >
            After
          </span>
        </div>
      </div>

      {/* Label */}
      <div style={{ padding: '16px 20px' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--ink)',
          }}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ padding: 'var(--section-pad)', background: 'var(--bg-soft)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Transformations
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: 0,
              marginBottom: 16,
            }}
          >
            Before &amp; After
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 460, margin: '0 auto' }}>
            Every transformation begins with listening. Here is what we create together.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 28,
          }}
        >
          {transformations.map((t) => (
            <BeforeAfterCard key={t.label} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
