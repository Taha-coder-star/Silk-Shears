const items = [
  'Signature Cuts',
  '✦',
  'Editorial Color',
  '✦',
  'Keratin Ritual',
  '✦',
  'Bridal Styling',
  '✦',
  'Skin Facials',
  '✦',
  'Beard Sculpting',
  '✦',
  'West Village',
  '✦',
  'Est. 2014',
  '✦',
];

export default function Marquee() {
  const text = [...items, ...items];

  return (
    <div
      style={{
        background: 'var(--ink)',
        overflow: 'hidden',
        padding: '18px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {text.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              padding: '0 20px',
              fontFamily: item === '✦' ? 'serif' : 'var(--font-display)',
              fontSize: item === '✦' ? 10 : 14,
              fontWeight: item === '✦' ? 400 : 600,
              color: item === '✦' ? 'var(--accent)' : 'var(--bg)',
              letterSpacing: item === '✦' ? 0 : '0.12em',
              textTransform: 'uppercase',
              lineHeight: 1,
              verticalAlign: 'middle',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
