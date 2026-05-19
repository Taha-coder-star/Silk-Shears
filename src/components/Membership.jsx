import Icon from './ui/Icon.jsx';

const tiers = [
  {
    name: 'Silk',
    price: 120,
    tagline: 'For the monthly ritual',
    featured: false,
    perks: [
      '1 Signature Cut per month',
      '10% off all services',
      'Priority booking window',
      'Complimentary styling products',
    ],
  },
  {
    name: 'Velvet',
    price: 240,
    tagline: 'Most popular · For the devoted',
    featured: true,
    perks: [
      '2 services of your choice',
      '20% off all add-ons',
      'Guaranteed same-week availability',
      'Monthly hair treatment included',
      'Dedicated stylist pairing',
    ],
  },
  {
    name: 'Atelier',
    price: 480,
    tagline: 'For the connoisseur',
    featured: false,
    perks: [
      'Unlimited services (4 max/mo)',
      '30% off retail products',
      'After-hours appointments available',
      'Quarterly editorial consultation',
      'Private suite access',
      'Annual hair health audit',
    ],
  },
];

function TierCard({ tier }) {
  return (
    <div
      style={{
        background: tier.featured ? 'var(--ink)' : 'var(--surface)',
        borderRadius: 'var(--r-lg)',
        padding: '40px 32px',
        boxShadow: tier.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        border: tier.featured ? 'none' : '1px solid var(--peach)',
        transform: tier.featured ? 'translateY(-16px)' : 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      {tier.featured && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--accent)',
            color: '#fff',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 18px',
            borderRadius: 'var(--r-full)',
            whiteSpace: 'nowrap',
          }}
        >
          Most Popular
        </div>
      )}

      {/* Tier name */}
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: tier.featured ? 'var(--accent)' : 'var(--muted)',
            marginBottom: 8,
          }}
        >
          {tier.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 48,
            fontWeight: 700,
            color: tier.featured ? '#f3ede4' : 'var(--ink)',
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          ${tier.price}
          <span
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: tier.featured ? '#a08878' : 'var(--muted)',
              marginLeft: 4,
            }}
          >
            /mo
          </span>
        </div>
        <p
          style={{
            fontSize: 13,
            color: tier.featured ? '#8a7468' : 'var(--muted)',
          }}
        >
          {tier.tagline}
        </p>
      </div>

      {/* Perks */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {tier.perks.map((perk) => (
          <li
            key={perk}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 14,
              color: tier.featured ? '#d4bfad' : 'var(--ink-2)',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: tier.featured ? 'rgba(207,122,90,0.2)' : 'var(--blush)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              <Icon name="check" size={11} color={tier.featured ? 'var(--accent)' : 'var(--accent-deep)'} />
            </span>
            {perk}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: 'block',
          textAlign: 'center',
          background: tier.featured ? 'var(--accent)' : 'transparent',
          color: tier.featured ? '#fff' : 'var(--ink)',
          border: tier.featured ? 'none' : '1.5px solid var(--peach)',
          borderRadius: 'var(--r-full)',
          padding: '13px 0',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.02em',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={(e) => {
          if (tier.featured) {
            e.currentTarget.style.background = 'var(--accent-deep)';
          } else {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }
        }}
        onMouseLeave={(e) => {
          if (tier.featured) {
            e.currentTarget.style.background = 'var(--accent)';
          } else {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.borderColor = 'var(--peach)';
          }
        }}
      >
        Start {tier.name} Membership
      </a>
    </div>
  );
}

export default function Membership() {
  return (
    <section
      id="membership"
      style={{ padding: 'var(--section-pad)', background: 'var(--bg-soft)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
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
            Membership
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
            Invest in Yourself, Monthly
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Our membership tiers are built for regulars who deserve more than a transaction.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 24,
            alignItems: 'start',
          }}
        >
          {tiers.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
