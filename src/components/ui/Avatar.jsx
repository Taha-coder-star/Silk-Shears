import Photo from './Photo.jsx';

export default function Avatar({ size = 40, seed, variant, ring = false }) {
  const selectedSeed = variant ?? seed ?? 0;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      boxShadow: ring ? '0 0 0 2px var(--bg), 0 0 0 4px var(--accent)' : undefined,
    }}>
      <Photo kind="portrait" seed={selectedSeed} rounded="50%" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
