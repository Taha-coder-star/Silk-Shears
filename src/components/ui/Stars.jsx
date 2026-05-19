export default function Stars({ value, rating, size = 12, color = 'var(--accent)' }) {
  const filled = Math.round(value ?? rating ?? 5);

  return (
    <span style={{ display: 'inline-flex', gap: 2, color }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= filled ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.3 4.9L18.2 22 12 18.3 5.8 22l1.5-7.1L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </span>
  );
}
