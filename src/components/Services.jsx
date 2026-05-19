import Icon from './ui/Icon.jsx';
import Divider from './ui/Divider.jsx';

const services = [
  { name: 'Signature Cut', cat: 'Hair', dur: '60 min', price: '$120', icon: 'scissors', variant: 0 },
  { name: 'Editorial Color', cat: 'Color', dur: '180 min', price: '$320', icon: 'flower', variant: 1 },
  { name: 'Keratin Ritual', cat: 'Treatment', dur: '120 min', price: '$240', icon: 'heart', variant: 2 },
  { name: 'Bridal Styling', cat: 'Event', dur: '90 min', price: '$280', icon: 'star', variant: 3 },
  { name: 'Skin Facial', cat: 'Spa', dur: '60 min', price: '$160', icon: 'flower', variant: 4 },
  { name: 'Beard Sculpt', cat: 'Grooming', dur: '45 min', price: '$80', icon: 'scissors', variant: 5 },
];

function ServiceCard({ service }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--r-lg)',
        padding: '32px 28px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--peach)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Icon badge */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 'var(--r-md)',
          background: 'var(--blush)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name={service.icon} size={24} color="var(--accent)" />
      </div>

      {/* Category tag */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        {service.cat}
      </span>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--ink)',
          lineHeight: 1.2,
        }}
      >
        {service.name}
      </h3>

      <Divider />

      {/* Footer row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 13 }}>
          <Icon name="clock" size={14} color="var(--muted)" />
          {service.dur}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 700,
            color: 'var(--ink)',
          }}
        >
          {service.price}
        </div>
      </div>

      <a
        href="#contact"
        style={{
          display: 'block',
          textAlign: 'center',
          background: 'var(--bg)',
          color: 'var(--ink-2)',
          borderRadius: 'var(--r-full)',
          padding: '10px 0',
          fontSize: 13,
          fontWeight: 600,
          border: '1.5px solid var(--peach)',
          transition: 'background 0.2s, color 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderColor = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--bg)';
          e.currentTarget.style.color = 'var(--ink-2)';
          e.currentTarget.style.borderColor = 'var(--peach)';
        }}
      >
        Book This Service
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: 'var(--bg-soft)', padding: 'var(--section-pad)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
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
            Our Offerings
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
            Services &amp; Pricing
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Every service is a ritual — crafted with time, skill, and quiet attention.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 24,
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
