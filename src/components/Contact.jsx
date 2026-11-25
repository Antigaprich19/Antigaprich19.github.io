import { useState } from 'react';
import Icon from './Icons';
import { CONTACT } from '../data/content';

const INFO = [
  ['mail', 'Email', CONTACT.email, `mailto:${CONTACT.email}`, false],
  ['phone', 'Phone', CONTACT.phone, CONTACT.phoneHref, false],
  ['facebook', 'Facebook', CONTACT.facebook.label, CONTACT.facebook.url, true],
  ['instagram', 'Instagram', CONTACT.instagram.label, CONTACT.instagram.url, true],
  ['tiktok', 'TikTok', CONTACT.tiktok.label, CONTACT.tiktok.url, true],
];

const EMPTY = { fullname: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.fullname}\nEmail: ${form.email}\n\n${form.message}`;
    setSending(true);
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setSending(false); setForm(EMPTY); }, 1800);
  };

  return (
    <section id="contact" className="bg-soft">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Get In Touch</div>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-card reveal">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels — I usually respond within a day.</p>
            {INFO.map(([icon, lbl, val, href, ext]) => (
              <div className="cinfo-item reveal-item" key={lbl}>
                <div className="cinfo-ic"><Icon name={icon} /></div>
                <div>
                  <div className="lbl">{lbl}</div>
                  <div className="val">
                    <a href={href} className="cinfo-link" {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{val}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="form-card reveal">
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" id="fullname" name="fullname" placeholder="Your name" required value={form.fullname} onChange={onChange} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" required value={form.email} onChange={onChange} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required value={form.subject} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required value={form.message} onChange={onChange} />
              </div>
              <button type="submit" className={`submit-btn${sending ? ' sending' : ''}`}>
                <span className="btn-label">{sending ? 'Opening Email App…' : 'Send Message'}</span>
                <Icon name="send" className="btn-icon" />
              </button>
              <div className="form-note">Or email me directly at {CONTACT.email}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
