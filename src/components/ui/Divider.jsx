export default function Divider({ width = 48, color = 'var(--accent)' }) {
  const mid = width / 2;
  return (
    <svg width={width} height={8} viewBox={`0 0 ${width} 8`} style={{ flexShrink: 0 }}>
      <line x1="0" y1="4" x2={mid - 6} y2="4" stroke={color} strokeWidth="1" />
      <circle cx={mid} cy="4" r="2.5" fill={color} />
      <line x1={mid + 6} y1="4" x2={width} y2="4" stroke={color} strokeWidth="1" />
    </svg>
  );
}
