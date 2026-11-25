import Icon from './Icons';
import { CONTACT } from '../data/content';

const LINKS = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['portfolio', 'Portfolio'], ['contact', 'Contact']];
const SOCIAL = [
  ['facebook', 'Facebook', CONTACT.facebook.url, true],
  ['instagram', 'Instagram', CONTACT.instagram.url, true],
  ['tiktok', 'TikTok', CONTACT.tiktok.url, true],
  ['mail', 'Email', `mailto:${CONTACT.email}`, false],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo"><span className="mono">PA</span> Prich Antiga</a>
            <p>Graphic Designer • Creative Editor • Student</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>{LINKS.map(([id, l]) => <li key={id}><a href={`#${id}`}>{l}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-row">
              {SOCIAL.map(([icon, label, href, ext]) => (
                <a key={label} href={href} aria-label={label} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Prich Antiga. All Rights Reserved.</div>
          <div>Designed with care.</div>
        </div>
      </div>
    </footer>
  );
}
