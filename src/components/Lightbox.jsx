import { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={`lightbox${src ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <span className="lightbox-close" onClick={onClose}>&times;</span>
      {src && <img src={src} alt="Project preview" />}
    </div>
  );
}
