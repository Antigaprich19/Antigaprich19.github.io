import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio onOpen={setLightboxSrc} />
      <Contact />
      <Footer />
    </>
  );
}
