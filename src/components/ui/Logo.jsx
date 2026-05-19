export function Logo({ size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <circle cx="18" cy="46" r="7" />
        <circle cx="46" cy="46" r="7" />
        <path d="M21.5 41 L46 14" />
        <path d="M42.5 41 L18 14" />
        <path d="M32 28 L32 12" />
      </g>
    </svg>
  );
}

export function Wordmark({ size = 22, color = 'var(--ink)' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color }}>
      <Logo size={size + 6} color={color} />
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: size,
        letterSpacing: 0,
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>
        Silk <em style={{ fontStyle: 'italic', fontWeight: 400 }}>&amp;</em> Shears
      </span>
    </div>
  );
}
