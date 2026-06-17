import { Quote as QuoteIcon } from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

export default function QuoteSlide({ section, alt }) {
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <Eyebrow icon={section.icon || 'Quote'} label={section.eyebrow} />
        <QuoteIcon className={`w-10 h-10 mb-8 ${theme.accentText} opacity-50`} />
        <blockquote className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          "{section.quote}"
        </blockquote>
        <p className="mt-10 text-lg md:text-xl text-gray-600">— {section.attribution}</p>
      </div>
    </section>
  );
}
