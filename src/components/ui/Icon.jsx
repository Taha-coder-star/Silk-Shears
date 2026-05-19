export default function Icon({ name, size = 18, color = 'currentColor', stroke = 1.6 }) {
  const p = {
    arrow:     <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
    plus:      <path d="M12 5v14M5 12h14" />,
    check:     <path d="M5 12l4 4 10-10" />,
    close:     <path d="M6 6l12 12M18 6L6 18" />,
    star:      <path d="M12 2l2.9 6.9L22 10l-5.3 4.9L18.2 22 12 18.3 5.8 22l1.5-7.1L2 10l7.1-1.1L12 2z" />,
    heart:     <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />,
    flower:    <><path d="M12 8c2-4 6-3 6 0 0 2-2 3-4 3 4 2 4 6 1 7-2 1-3-1-3-4-2 4-6 4-7 1-1-2 1-3 4-3-4-2-4-6-1-7 2-1 3 1 4 3z" /><circle cx="12" cy="12" r="2" /></>,
    phone:     <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" />,
    clock:     <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    cal:       <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    user:      <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></>,
    search:    <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>,
    menu:      <path d="M4 7h16M4 12h16M4 17h16" />,
    wa:        <path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.51-1.48A12 12 0 1020.52 3.48zM12 18c-1.4 0-2.73-.37-3.88-1.01l-4.12.54.55-4.1A8 8 0 1112 18z" />,
    whatsapp:  <path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.51-1.48A12 12 0 1020.52 3.48zM12 18c-1.4 0-2.73-.37-3.88-1.01l-4.12.54.55-4.1A8 8 0 1112 18z" />,
    ig:        <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></>,
    fb:        <path d="M14 8h3V5h-3a4 4 0 00-4 4v2H7v3h3v8h3v-8h3l1-3h-4V9a1 1 0 011-1z" />,
    tt:        <path d="M15 4v8a4 4 0 11-4-4M15 4a4 4 0 004 4" />,
    sparkle:   <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" /></>,
    scissors:  <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.5 8.5L20 20M8.5 15.5L20 4" /></>,
    pin:       <><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    location:  <><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></>,
    dots:      <><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></>,
    play:      <path d="M8 5l12 7-12 7V5z" fill={color} />,
    quote:     <><path d="M9 7H5v6h3c0 2-1 3-3 4" /><path d="M19 7h-4v6h3c0 2-1 3-3 4" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0 }}>
      {p[name] || p.arrow}
    </svg>
  );
}
