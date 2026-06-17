import { Check, ArrowRight, Dot } from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

const MARKER_ICONS = { check: Check, arrow: ArrowRight, dot: Dot };

export default function BulletsSlide({ section, alt }) {
  const Marker = MARKER_ICONS[section.marker] || Check;
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-12">{section.heading}</h2>
        <ul className="space-y-6">
          {section.items.map((item, i) => {
            const title = typeof item === 'string' ? item : item.title;
            const body  = typeof item === 'string' ? null  : item.body;
            return (
              <li key={i} className="flex items-start gap-4 text-xl md:text-2xl">
                <Marker className={`w-5 h-5 mt-1.5 ${theme.accentText} shrink-0`} />
                <span>
                  {title}
                  {body && <span className="block text-base md:text-lg text-gray-500 mt-1 leading-relaxed">{body}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
