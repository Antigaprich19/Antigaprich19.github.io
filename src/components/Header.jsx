import { useEffect, useState } from 'react';
import { NAV } from '../data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#home" className="logo"><span className="mono">PA</span> Prich Antiga</a>
        <ul className={`navlinks${open ? ' open' : ''}`} id="navLinks">
          {NAV.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
          <li><a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Contact Me</a></li>
        </ul>
        <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
