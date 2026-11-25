import { SKILLS } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="bg-soft">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">What I Do</div>
          <h2>Skills &amp; Expertise</h2>
          <p>A blend of design tools, editing software, and soft skills I use to bring creative ideas to life.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map(([title, tags]) => (
            <div className="skill-card reveal" key={title}>
              <h3>{title}</h3>
              <div className="tag-list">
                {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
