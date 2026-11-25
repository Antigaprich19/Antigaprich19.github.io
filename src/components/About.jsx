import Icon from './Icons';
import { ABOUT_CARDS, STATS } from '../data/content';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <div className="eyebrow">About Me</div>
            <h2 style={{ fontSize: 'clamp(30px,4vw,42px)', marginBottom: 20 }}>A little about my creative journey</h2>
            <p>I am a dedicated and creative student with a passion for graphic design, content creation, and digital editing. I enjoy learning new technologies, exploring creative ideas, and developing skills that help me produce high-quality visual content.</p>
            <p>My goal is to grow professionally while creating designs that leave a positive impression.</p>
            <div className="info-cards">
              {ABOUT_CARDS.map(([icon, label]) => (
                <div className="info-card" key={label}>
                  <span className="ic"><Icon name={icon} /></span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="stats-panel">
              {STATS.map((s) => (
                <div className="stat" key={s.lbl}>
                  <div className="num">
                    {s.accent === 'suffix' ? <>{s.num}<span>{s.suffix}</span></> : s.wrap ? <><span>{s.num}</span>{s.suffix}</> : s.num}
                  </div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
