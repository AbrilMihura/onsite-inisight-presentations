import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

export default function StatsSlide({ section, alt }) {
  const cols = Math.min(section.stats.length, 4);
  const gridClass = ['', 'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4'][cols] || 'md:grid-cols-3';
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-16">{section.heading}</h2>
        <div className={`grid gap-8 grid-cols-1 ${gridClass}`}>
          {section.stats.map((s, i) => (
            <div key={i}>
              <p className={`font-display text-6xl md:text-7xl font-semibold ${theme.accentText}`}>{s.value}</p>
              <p className="mt-3 text-lg md:text-xl text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
        {section.footnote && <p className="mt-12 text-sm text-gray-500">{section.footnote}</p>}
      </div>
    </section>
  );
}
