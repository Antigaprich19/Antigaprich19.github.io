import Icon from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-copy reveal in">
          <div className="eyebrow">Hello, I'm</div>
          <h1>Prich <em>Antiga</em></h1>
          <div className="role-line">
            Student <span className="dot"></span> Graphic Designer <span className="dot"></span> Creative Editor
          </div>
          <p className="desc">I enjoy creating visually appealing designs, editing digital content, and transforming ideas into beautiful and meaningful projects. I continuously improve my creativity and technical skills to deliver quality work.</p>
          <div className="btn-row">
            <a href="#portfolio" className="btn btn-primary">View My Portfolio</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-photo-wrap reveal in">
          <div className="badge-float badge-1"><span className="badge-emoji"><Icon name="palette" /></span> 15+ Projects</div>
          <div className="badge-float badge-2"><span className="badge-emoji"><Icon name="cap" /></span> Design Student</div>
          <div className="photo-card">
            <img src="assets/portrait.jpg" alt="Portrait of Prich Antiga" />
          </div>
        </div>
      </div>
    </section>
  );
}
