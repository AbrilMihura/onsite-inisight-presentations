import { useEffect, useState } from 'react';
import { theme } from '../theme.js';

export default function FloatingIndex({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Sections"
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex items-center justify-end gap-3 text-xs tracking-widest uppercase transition ${
              isActive ? `${theme.accentText} font-semibold` : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            <span className={`opacity-0 group-hover:opacity-100 transition ${isActive ? 'opacity-100' : ''}`}>
              {s.label}
            </span>
            <span
              className={`block w-2.5 h-2.5 rounded-full border ${
                isActive ? 'bg-current border-current' : 'border-gray-400 group-hover:border-gray-700'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
