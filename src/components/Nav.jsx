import { useState } from 'react';
import { Wordmark } from './ui/Logo.jsx';
import Icon from './ui/Icon.jsx';
import s from './Nav.module.css';

const LINKS = ['Services','Stylists','Gallery','Membership','Journal','Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={s.nav}>
      <div className={s.inner}>
        <a href="#" className={s.brand}><Wordmark size={20} /></a>

        <nav className={`${s.links} ${open ? s.open : ''}`}>
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className={s.link} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>

        <div className={s.actions}>
          <span className={s.locale}>EN · USD</span>
          <a href="#contact" className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 13 }}>
            Book Appointment <Icon name="arrow" size={13} />
          </a>
        </div>

        <button className={s.hamburger} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <Icon name={open ? 'close' : 'menu'} size={20} color="var(--ink)" />
        </button>
      </div>
    </header>
  );
}
