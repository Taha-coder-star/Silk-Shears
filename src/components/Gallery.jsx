import { useState } from 'react';
import Icon from './ui/Icon.jsx';
import { salonImages } from '../data/images.js';

const transformations = [
  {
    label: 'Balayage Transformation',
    comparison: salonImages.balayageComparison,
    objectPosition: 'center 26%',
  },
  {
    label: 'Signature Precision Cut',
    before: salonImages.precisionCutBefore,
    after: salonImages.precisionCutAfter,
    start: 52,
  },
  {
    label: 'Keratin Smoothing Ritual',
    before: salonImages.keratinBefore,
    after: salonImages.keratinAfter,
    start: 50,
  },
];

function BeforeAfterCard({ item }) {
  const [position, setPosition] = useState(item.start ?? 50);
  const updatePosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };
  const updateWithKeyboard = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    setPosition((current) => {
      if (event.key === 'Home') return 8;
      if (event.key === 'End') return 92;
      return Math.min(92, Math.max(8, current + (event.key === 'ArrowRight' ? 4 : -4)));
    });
  };

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
      {item.comparison ? (
        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <img
            src={item.comparison.src}
            alt={item.comparison.alt}
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: item.objectPosition ?? 'center',
            }}
          />
        </div>
      ) : (
        <div
          role="slider"
          tabIndex={0}
          aria-label={`${item.label} before and after comparison`}
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(position)}
          onPointerDown={(event) => {
            updatePosition(event);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (event.buttons !== 1) return;
            updatePosition(event);
          }}
          onKeyDown={updateWithKeyboard}
          style={{
            position: 'relative',
            height: 300,
            overflow: 'hidden',
            cursor: 'ew-resize',
            touchAction: 'none',
            outline: 'none',
          }}
        >
          <img
            src={item.before.src}
            alt={item.before.alt}
            loading="eager"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src={item.after.src}
            alt={item.after.alt}
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          />
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

          <div
            style={{
              position: 'absolute',
              left: `${position}%`,
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
                color: 'var(--accent)',
                userSelect: 'none',
              }}
            >
              <Icon name="compare" size={18} color="var(--accent)" stroke={2} />
            </div>
          </div>
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
      )}

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

        <p style={{ marginTop: 24, textAlign: 'center', color: 'var(--muted)', fontSize: 11, lineHeight: 1.6 }}>
          Photo credits: <a href={salonImages.precisionCutBefore.source} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Jessica Fiess-Hill</a> and{' '}
          <a href={salonImages.keratinBefore.source} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Hmwith</a> via Wikimedia Commons.
        </p>
      </div>
    </section>
  );
}
