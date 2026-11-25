const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
const fillBase = { viewBox: '0 0 24 24', fill: 'currentColor' };

const ICONS = {
  palette: (p) => (<svg {...base} {...p}><path d="M12 2a10 10 0 1 0 10 10c0-1-.5-2-2-2h-3a2 2 0 0 1-2-2 2 2 0 0 1 .6-1.4A2 2 0 0 0 14 5a2 2 0 0 0-2-3Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="8.5" cy="15" r="1"/><circle cx="13" cy="17" r="1"/></svg>),
  cap: (p) => (<svg {...base} {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>),
  monitor: (p) => (<svg {...base} {...p}><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
  leaf: (p) => (<svg {...base} {...p}><path d="M12 20v-8"/><path d="M12 12C7 12 5 9 5 5c4 0 7 2 7 7Z"/><path d="M12 12c5 0 7-3 7-7-4 0-7 2-7 7Z"/></svg>),
  mail: (p) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>),
  phone: (p) => (<svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
  facebook: (p) => (<svg {...fillBase} {...p}><path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.44c0-.93.26-1.56 1.59-1.56h1.7V3.02C15.98 2.97 15.06 2.9 14 2.9c-2.24 0-3.77 1.37-3.77 3.87v2.83H7.46v3.2h2.77V21h3.27z"/></svg>),
  instagram: (p) => (<svg {...base} {...p}><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>),
  tiktok: (p) => (<svg {...fillBase} {...p}><path d="M16.6 5.82c-.86-.94-1.34-2.16-1.34-3.42h-3.05v13.44c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 0 1 0-5.88c.27 0 .53.04.78.11V9.86a6 6 0 0 0-.78-.05 6 6 0 1 0 6 6V9.4a8.6 8.6 0 0 0 5 1.6V8.02a5.4 5.4 0 0 1-3.67-2.2z"/></svg>),
  send: (p) => (<svg {...base} strokeWidth={2} {...p}><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>),
};

export default function Icon({ name, ...props }) {
  const C = ICONS[name];
  return C ? C(props) : null;
}
