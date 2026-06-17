import * as Icons from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

export default function TimelineSlide({ section, alt }) {
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-16">{section.heading}</h2>
        <ol className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {section.phases.map((p, i) => {
            const Icon = (p.icon && Icons[p.icon]) || null;
            return (
              <li key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full ${theme.cta.bg} ${theme.cta.text} font-display font-semibold`}>
                    {Icon ? <Icon className="w-5 h-5" /> : i + 1}
                  </span>
                  <span className={`text-sm tracking-widest uppercase ${theme.accentText}`}>{p.duration}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{p.label}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{p.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
