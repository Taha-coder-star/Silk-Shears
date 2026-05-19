import Icon from './ui/Icon.jsx';

const cols = [
  {
    heading: 'Services',
    links: ['Signature Cut', 'Editorial Color', 'Keratin Ritual', 'Bridal Styling', 'Skin Facial', 'Beard Sculpt'],
  },
  {
    heading: 'Studio',
    links: ['Our Story', 'Meet the Team', 'Press', 'Gift Cards', 'Membership'],
  },
  {
    heading: 'Visit',
    links: ['42 Perry Street', 'West Village, NY', 'Tue–Fri 10–20', 'Sat 9–19', 'Sun 11–17'],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: '#a08878',
        padding: '72px 24px 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <Icon name="scissors" size={20} color="var(--accent)" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#f3ede4',
                }}
              >
                Silk &amp; Shears
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              A quietly luxurious salon in the West Village. By appointment, with intention. Est. 2014.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {['instagram', 'whatsapp'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--r-sm)',
                    background: 'rgba(243,237,228,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(207,122,90,0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(243,237,228,0.06)')}
                >
                  <Icon name={icon} size={18} color="#a08878" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#f3ede4',
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: '#8a7468',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8a7468')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(243,237,228,0.08)',
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
            color: '#5a4a42',
          }}
        >
          <span>© 2024 Silk &amp; Shears. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms', 'Accessibility'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ color: '#5a4a42', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5a4a42')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
