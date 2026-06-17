import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

export default function ImageSlide({ section, alt }) {
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-12">{section.heading}</h2>
        <figure>
          <img src={section.src} alt={section.alt} className="w-full rounded-lg shadow-lg" />
          {section.caption && <figcaption className="mt-4 text-sm text-gray-500">{section.caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
