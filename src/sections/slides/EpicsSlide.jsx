import { useState } from 'react';
import { ChevronDown, ChevronRight, Map, ListChecks, Building2, ShieldCheck } from 'lucide-react';
import { theme } from '../../theme.js';
import { Eyebrow } from './_Eyebrow.jsx';

// iOS-style icon styles — OI brand hex values (avoids Tailwind JIT scanning issues)
const EPIC_STYLES = [
  { Icon: Map,         bg: '#0584A4' }, // oi-bright
  { Icon: ListChecks,  bg: '#035A71' }, // oi-primary
  { Icon: Building2,   bg: '#01343F' }, // oi-navy
  { Icon: ShieldCheck, bg: '#046D89' }, // oi-mid
];

export default function EpicsSlide({ section, alt }) {
  const [openIndex, setOpenIndex] = useState(null);
  const bg = alt ? theme.section.altBg : theme.section.bg;

  return (
    <section
      id={section.id}
      className={`min-h-screen ${bg} px-8 md:px-24 py-24 flex flex-col justify-center`}
    >
      {section.eyebrow && <Eyebrow label={section.eyebrow} icon={section.icon} />}
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12 max-w-4xl">
        {section.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.epics.map((epic, i) => {
          const isOpen = openIndex === i;
          const { Icon, bg: iconBg } = EPIC_STYLES[i] || EPIC_STYLES[0];

          return (
            <div
              key={i}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`rounded-2xl border p-6 cursor-pointer transition-all duration-200 ${
                isOpen
                  ? 'border-oi-primary bg-oi-pale shadow-md'
                  : 'border-gray-200 bg-white hover:border-oi-100 hover:shadow-sm'
              }`}
            >
              {/* Header row */}
              <div className="flex items-start gap-4">
                {/* iOS icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title + goal */}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold tracking-widest uppercase text-oi-primary mb-1.5 block">
                    {epic.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-1.5 leading-snug">
                    {epic.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{epic.goal}</p>
                </div>

                {/* Story count + chevron */}
                <div className="flex-shrink-0 flex flex-col items-end gap-2 pt-0.5">
                  <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {epic.features.length} stories
                  </span>
                  {isOpen
                    ? <ChevronDown className="w-5 h-5 text-oi-primary" />
                    : <ChevronRight className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </div>

              {/* Expanded features */}
              {isOpen && (
                <div className="mt-5 pt-5 border-t border-oi-100">
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                    Features
                  </p>
                  <ul className="space-y-2.5">
                    {epic.features.map((f, j) => {
                      // Split "Feature label text  · #492" into display + id pill
                      const parts = f.split(/\s+·\s+#/);
                      const label = parts[0];
                      const id    = parts[1] ? `#${parts[1]}` : null;
                      return (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-oi-primary flex-shrink-0" />
                          <span className="flex-1">{label}</span>
                          {id && (
                            <span className="text-xs font-mono text-oi-primary bg-oi-pale border border-oi-100 px-2 py-0.5 rounded-full flex-shrink-0">
                              {id}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-gray-400 tracking-wide">
        Click each epic to see planned features →
      </p>
    </section>
  );
}
