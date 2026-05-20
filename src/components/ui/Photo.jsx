const palettes = [
  ['#f0d0c9', '#bd6546', '#261914'],
  ['#ead0b8', '#8d3f2d', '#3a2018'],
  ['#dccab5', '#8a6448', '#1a1410'],
  ['#f5e4d6', '#d89070', '#5b3f32'],
  ['#e8d4c0', '#a98342', '#2c2018'],
  ['#f0e0d0', '#677760', '#1f1812'],
];

export default function Photo({
  image,
  src,
  alt = '',
  kind = 'editorial',
  seed,
  variant,
  width,
  height,
  radius,
  rounded,
  objectPosition = 'center',
  loading = 'lazy',
  style = {},
  className = '',
  children,
}) {
  const selectedSeed = variant ?? seed ?? 0;
  const p = palettes[selectedSeed % palettes.length];
  const gradId = `photo-${kind}-${selectedSeed}`;
  const resolvedKind = kind === 'portrait' || selectedSeed % 3 === 0 ? 'portrait' : kind;
  const resolvedSrc = image?.src ?? src;
  const resolvedAlt = image?.alt ?? alt;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width,
        height,
        borderRadius: radius ?? rounded ?? 'var(--r-lg)',
        background: `
          radial-gradient(ellipse at 28% 18%, ${p[0]}cc, transparent 58%),
          radial-gradient(ellipse at 72% 82%, ${p[1]}, transparent 58%),
          linear-gradient(140deg, ${p[0]} 0%, ${p[1]} 54%, ${p[2]} 100%)
        `,
        ...style,
      }}
    >
      {resolvedSrc && (
        <img
          src={resolvedSrc}
          alt={resolvedAlt}
          loading={loading}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
          }}
        />
      )}

      {!resolvedSrc && resolvedKind === 'portrait' && (
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          viewBox="0 0 200 280"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0 }}
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={p[2]} stopOpacity="0.82" />
              <stop offset="100%" stopColor={p[2]} stopOpacity="0.38" />
            </linearGradient>
          </defs>
          <path
            d={
              selectedSeed % 2 === 0
                ? 'M60 80 Q40 110 50 180 Q60 240 80 260 L120 260 Q140 250 150 200 Q160 130 140 90 Q120 60 100 60 Q75 60 60 80 Z'
                : 'M55 90 Q35 140 45 200 Q55 260 90 270 L130 270 Q155 250 160 190 Q165 110 145 85 Q120 65 100 65 Q75 65 55 90 Z'
            }
            fill={`url(#${gradId})`}
          />
          <ellipse cx="100" cy="135" rx="32" ry="42" fill={p[0]} opacity="0.55" />
          <path d="M85 175 Q100 195 115 175 L120 230 L80 230 Z" fill={p[0]} opacity="0.4" />
        </svg>
      )}

      {!resolvedSrc && resolvedKind !== 'portrait' && (
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          viewBox="0 0 200 280"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0 }}
        >
          <path d="M0 200 Q60 140 100 160 Q150 180 200 130 L200 280 L0 280 Z" fill={p[2]} opacity="0.32" />
          <path d="M0 230 Q80 180 130 200 Q170 215 200 190 L200 280 L0 280 Z" fill={p[2]} opacity="0.48" />
          <circle cx={50 + (selectedSeed * 20) % 100} cy={70 + (selectedSeed * 13) % 60} r="3" fill={p[0]} opacity="0.82" />
        </svg>
      )}

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          mixBlendMode: 'multiply',
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      {children}
    </div>
  );
}
