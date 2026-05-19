import Photo from './ui/Photo.jsx';
import Avatar from './ui/Avatar.jsx';
import Stars from './ui/Stars.jsx';
import Icon from './ui/Icon.jsx';

const stylists = [
  {
    name: 'Mira Kavanaugh',
    title: 'Creative Director',
    rating: 4.98,
    reviews: 412,
    specialty: 'Precision cuts & color theory',
    variant: 0,
  },
  {
    name: 'Asha Lin',
    title: 'Senior Colorist',
    rating: 4.95,
    reviews: 287,
    specialty: 'Balayage & lived-in tones',
    variant: 1,
  },
  {
    name: 'Theo Marchetti',
    title: 'Style Artist',
    rating: 4.97,
    reviews: 356,
    specialty: 'Editorial & bridal styling',
    variant: 2,
  },
  {
    name: 'Iman Hassan',
    title: 'Master Groomer',
    rating: 4.99,
    reviews: 198,
    specialty: 'Texture, curls & beard art',
    variant: 3,
  },
];

function StylistCard({ stylist, idx }) {
  const initials = stylist.name.split(' ').map((n) => n[0]).join('');

  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--peach)',
        transition: 'transform 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Portfolio photo strip */}
      <div style={{ display: 'flex', gap: 4, padding: '12px 12px 0' }}>
        <Photo kind="portrait" variant={(idx * 2) % 6} height={120} radius="var(--r-sm)" style={{ flex: 2 }} />
        <Photo kind="editorial" variant={(idx * 2 + 1) % 6} height={120} radius="var(--r-sm)" style={{ flex: 1 }} />
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <Avatar variant={idx % 4} size={44} initials={initials} />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 17,
                fontWeight: 700,
                color: 'var(--ink)',
                lineHeight: 1.2,
              }}
            >
              {stylist.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{stylist.title}</div>
          </div>
        </div>

        <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 12 }}>
          {stylist.specialty}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <Stars rating={Math.floor(stylist.rating)} size={13} />
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{stylist.rating}</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>({stylist.reviews})</span>
        </div>

        <a
          href="#contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            background: 'var(--blush)',
            color: 'var(--accent-deep)',
            borderRadius: 'var(--r-full)',
            padding: '10px 0',
            fontSize: 13,
            fontWeight: 600,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--blush)';
            e.currentTarget.style.color = 'var(--accent-deep)';
          }}
        >
          Book with {stylist.name.split(' ')[0]}
          <Icon name="arrow" size={14} color="currentColor" />
        </a>
      </div>
    </div>
  );
}

export default function Stylists() {
  return (
    <section
      id="stylists"
      style={{ padding: 'var(--section-pad)', background: 'var(--bg)' }}
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
            The Collective
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
            Meet Your Stylists
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Handpicked artists with years of editorial and salon experience, each a specialist in their craft.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: 24,
          }}
        >
          {stylists.map((s, i) => (
            <StylistCard key={s.name} stylist={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
