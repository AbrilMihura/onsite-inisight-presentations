import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

export default function TextSlide({ section, alt }) {
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} bg-dotgrid px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="relative max-w-4xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-12">{section.heading}</h2>
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}
