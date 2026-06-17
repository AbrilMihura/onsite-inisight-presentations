import { content } from '../content.js';
import { theme } from '../theme.js';

export default function Closing() {
  const c = content.closing;
  return (
    <section
      id="closing"
      className={`relative min-h-screen ${theme.hero.bg} ${theme.hero.text} flex flex-col items-center justify-center text-center px-8 py-24 overflow-hidden`}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto w-[36rem] md:w-[56rem] opacity-[0.08]"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
      >
        <ellipse cx="300" cy="300" rx="280" ry="100" strokeWidth="1.5" />
        <ellipse cx="300" cy="300" rx="280" ry="100" strokeWidth="1.5" transform="rotate(40 300 300)" />
        <ellipse cx="300" cy="300" rx="180" ry="65"  strokeWidth="1"   transform="rotate(20 300 300)" />
      </svg>
      <div className="relative flex flex-col items-center">
        <h2 className="font-display text-6xl md:text-8xl font-semibold">{c.title}</h2>
        {c.subtitle && (
          <p className="mt-8 text-2xl md:text-3xl opacity-70">{c.subtitle}</p>
        )}
      </div>
    </section>
  );
}
