import { PROJECTS } from '../data/content';

export default function Portfolio({ onOpen }) {
  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Selected Work</div>
          <h2>Portfolio &amp; Featured Projects</h2>
          <p>A showcase of design, editing, and creative projects developed for academic and personal growth.</p>
        </div>
        <div className="portfolio-grid">
          {PROJECTS.map((p) => (
            <div className="proj-card reveal" key={p.title}>
              {p.img ? (
                <a
                  className="proj-top proj-top-img"
                  href={p.img}
                  style={{ backgroundImage: `url('${p.img}')` }}
                  onClick={(e) => { e.preventDefault(); onOpen(p.img); }}
                >
                  <span className="pnum">{p.tag}</span>
                </a>
              ) : (
                <div className={`proj-top proj-top-deco ${p.deco}`}>
                  <span className="pnum">{p.tag}</span>
                  <div className="deco-shape s1"></div><div className="deco-shape s2"></div><div className="deco-shape s3"></div>
                </div>
              )}
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tools">{p.tools}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
