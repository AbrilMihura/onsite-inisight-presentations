import { useState } from 'react';
import { ClipboardList, Eye, BarChart3, ChevronDown, ChevronRight } from 'lucide-react';
import { theme } from '../../theme.js';
import { Eyebrow } from './_Eyebrow.jsx';

const COL_STYLES = [
  { Icon: ClipboardList, bg: '#01343F' }, // oi-navy
  { Icon: Eye,           bg: '#0584A4' }, // oi-bright
  { Icon: BarChart3,     bg: '#33B7CF' }, // oi-light
];

function PilotColumn({ col, style }) {
  const [open, setOpen] = useState(false);
  const { Icon, bg } = style;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col">
      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ backgroundColor: bg }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-gray-900">{col.label}</h3>
      </div>

      {/* Description — always visible */}
      {col.description && (
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{col.description}</p>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mt-2"
        style={{ color: bg }}
      >
        {open
          ? <ChevronDown className="w-3.5 h-3.5" />
          : <ChevronRight className="w-3.5 h-3.5" />
        }
        {open ? 'Hide steps' : 'See steps'}
      </button>

      {/* Item titles — only titles, no body */}
      {open && (
        <ul className="mt-4 pt-4 border-t border-gray-100 space-y-2.5">
          {col.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: bg }}
              />
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ThreeColSlide({ section, alt }) {
  const bg = alt ? theme.section.altBg : theme.section.bg;
  return (
    <section
      id={section.id}
      className={`${bg} px-8 md:px-24 py-16 flex flex-col justify-center`}
    >
      {section.eyebrow && <Eyebrow label={section.eyebrow} icon={section.icon} />}
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 max-w-4xl">
        {section.heading}
      </h2>
      {section.subtitle && (
        <p className="text-gray-500 text-lg mb-12 max-w-2xl leading-relaxed">{section.subtitle}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {section.columns.map((col, i) => (
          <PilotColumn key={col.label} col={col} style={COL_STYLES[i] || COL_STYLES[0]} />
        ))}
      </div>
    </section>
  );
}
