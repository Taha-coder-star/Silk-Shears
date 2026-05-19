import Stars from './ui/Stars.jsx';
import Avatar from './ui/Avatar.jsx';
import Icon from './ui/Icon.jsx';
import Divider from './ui/Divider.jsx';

const reviews = [
  {
    name: 'Camille R.',
    title: 'Regular Client',
    rating: 5,
    text: 'Mira understood exactly what I wanted without me needing to explain twice. The salon itself feels like stepping into a different world — so calm, so considered. I won\'t go anywhere else.',
    service: 'Signature Cut',
    variant: 0,
  },
  {
    name: 'Priya M.',
    title: 'Bride, June 2024',
    rating: 5,
    text: 'Asha\'s color work is genuinely unparalleled. I walked in with damaged, uneven hair and left with something I can only describe as luminous. My guests kept asking who did my hair.',
    service: 'Editorial Color',
    variant: 1,
  },
  {
    name: 'James T.',
    title: 'Monthly Member',
    rating: 5,
    text: 'As a man who\'s been awkward about salons my whole life — this place changed that. Theo is effortlessly skilled and the atmosphere is relaxed without feeling stuffy. Highly recommend.',
    service: 'Beard Sculpt',
    variant: 2,
  },
];

const press = ['Vogue', 'ELLE', 'Harper\'s Bazaar', 'The Cut', 'New York Times'];

function ReviewCard({ review }) {
  const initials = review.name.split(' ').map((n) => n[0]).join('');

  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--r-lg)',
        padding: '36px 32px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--peach)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {/* Quote icon */}
      <Icon name="quote" size={28} color="var(--blush)" />

      {/* Stars */}
      <Stars rating={review.rating} size={15} />

      {/* Text */}
      <p
        style={{
          fontSize: 16,
          color: 'var(--ink-2)',
          lineHeight: 1.75,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{review.text}"
      </p>

      <Divider />

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar variant={review.variant} size={44} initials={initials} />
        <div>
          <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}>{review.name}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{review.title}</div>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--accent)',
            background: 'var(--blush)',
            padding: '4px 10px',
            borderRadius: 'var(--r-full)',
          }}
        >
          {review.service}
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
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
            What Clients Say
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
            4.96 ★ across 2,140 reviews
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, margin: '0 auto' }}>
            Words from the people who trust us with their most personal expression.
          </p>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 24,
            marginBottom: 64,
          }}
        >
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>

        {/* Press strip */}
        <div
          style={{
            borderTop: '1px solid var(--peach)',
            paddingTop: 40,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px 40px',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            As seen in
          </span>
          {press.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--peach)',
                letterSpacing: 0,
                transition: 'color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--peach)')}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
