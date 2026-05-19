import Icon from './ui/Icon.jsx';

const hours = [
  { day: 'Tuesday – Friday', time: '10:00 – 20:00' },
  { day: 'Saturday', time: '9:00 – 19:00' },
  { day: 'Sunday', time: '11:00 – 17:00' },
  { day: 'Monday', time: 'Closed' },
];

function SvgMap() {
  return (
    <svg
      viewBox="0 0 300 200"
      style={{
        width: '100%',
        height: 200,
        borderRadius: 'var(--r-md)',
        background: 'var(--bg-soft)',
        border: '1px solid var(--peach)',
      }}
    >
      {/* Grid / blocks */}
      <rect x="20" y="20" width="80" height="50" rx="4" fill="var(--peach)" opacity="0.5" />
      <rect x="110" y="20" width="60" height="50" rx="4" fill="var(--peach)" opacity="0.4" />
      <rect x="180" y="20" width="100" height="50" rx="4" fill="var(--peach)" opacity="0.5" />
      <rect x="20" y="90" width="50" height="60" rx="4" fill="var(--peach)" opacity="0.4" />
      <rect x="80" y="90" width="90" height="60" rx="4" fill="var(--peach)" opacity="0.5" />
      <rect x="180" y="90" width="100" height="60" rx="4" fill="var(--peach)" opacity="0.4" />
      <rect x="20" y="165" width="260" height="20" rx="4" fill="var(--peach)" opacity="0.3" />

      {/* Roads */}
      <line x1="0" y1="78" x2="300" y2="78" stroke="var(--bg)" strokeWidth="8" />
      <line x1="0" y1="160" x2="300" y2="160" stroke="var(--bg)" strokeWidth="8" />
      <line x1="170" y1="0" x2="170" y2="200" stroke="var(--bg)" strokeWidth="8" />
      <line x1="75" y1="0" x2="75" y2="200" stroke="var(--bg)" strokeWidth="6" />

      {/* Road labels */}
      <text x="20" y="72" fontSize="7" fill="var(--muted)" fontFamily="Inter, sans-serif">Perry St</text>
      <text x="20" y="154" fontSize="7" fill="var(--muted)" fontFamily="Inter, sans-serif">Charles St</text>

      {/* Pin */}
      <circle cx="120" cy="78" r="14" fill="var(--accent)" opacity="0.2" />
      <circle cx="120" cy="78" r="7" fill="var(--accent)" />
      <circle cx="120" cy="78" r="3" fill="#fff" />
      {/* Pin stem */}
      <line x1="120" y1="85" x2="120" y2="95" stroke="var(--accent)" strokeWidth="2" />

      {/* Label */}
      <rect x="82" y="98" width="76" height="18" rx="4" fill="var(--ink)" />
      <text x="120" y="110" fontSize="7" fill="#f3ede4" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600">
        Silk &amp; Shears
      </text>
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
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
            Find Us
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: 0,
            }}
          >
            Visit the Studio
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left: info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {/* Address */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--blush)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="location" size={18} color="var(--accent)" />
                </div>
                <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}>Address</span>
              </div>
              <p style={{ color: 'var(--ink-2)', lineHeight: 1.7, paddingLeft: 46 }}>
                42 Perry Street<br />
                West Village, NY 10014
              </p>
            </div>

            {/* Hours */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--blush)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="clock" size={18} color="var(--accent)" />
                </div>
                <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 15 }}>Hours</span>
              </div>
              <div style={{ paddingLeft: 46, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 14,
                      borderBottom: '1px solid var(--peach)',
                      paddingBottom: 8,
                    }}
                  >
                    <span style={{ color: 'var(--ink-2)' }}>{h.day}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: h.time === 'Closed' ? 'var(--muted)' : 'var(--ink)',
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact actions */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="tel:+12125550142"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  padding: '12px 22px',
                  borderRadius: 'var(--r-full)',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Icon name="phone" size={16} color="var(--bg)" />
                +1 (212) 555·0142
              </a>

              <a
                href="https://wa.me/12125550142"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#25D366',
                  color: '#fff',
                  padding: '12px 22px',
                  borderRadius: 'var(--r-full)',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Icon name="whatsapp" size={18} color="#fff" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div>
            <SvgMap />
            <p
              style={{
                textAlign: 'center',
                marginTop: 12,
                fontSize: 13,
                color: 'var(--muted)',
              }}
            >
              42 Perry Street · West Village, New York City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
