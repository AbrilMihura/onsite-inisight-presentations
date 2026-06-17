import { useState } from 'react';
import { ClipboardList, Eye, BarChart3, ChevronDown, ChevronRight } from 'lucide-react';
import { theme } from '../../theme.js';
import { Eyebrow } from './_Eyebrow.jsx';

// OI brand hex values — avoids Tailwind JIT scanning issues
const COL_STYLES = [
  { Icon: ClipboardList, bg: '#01343F' }, // oi-navy
  { Icon: Eye,           bg: '#0584A4' }, // oi-bright
  { Icon: BarChart3,     bg: '#33B7CF' }, // oi-light
];

function ColItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasBody = Boolean(item.body);
  return (
    <li
      onClick={() => hasBody && setOpen(!open)}
      className={`py-3 ${hasBody ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold text-gray-900 text-sm leading-snug">{item.title}</p>
        {hasBody && (
          open
            ? <ChevronDown className="w-4 h-4 text-oi-primary flex-shrink-0" />
            : <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
      </div>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed mt-2">{item.body}</p>
      )}
    </li>
  );
}

export default function ThreeColSlide({ section, alt }) {
  const bg = alt ? theme.section.altBg : theme.section.bg;
  return (
    <section
      id={section.id}
      className={`min-h-screen ${bg} px-8 md:px-24 py-24 flex flex-col justify-center`}
    >
      {section.eyebrow && <Eyebrow label={section.eyebrow} icon={section.icon} />}
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-14 max-w-4xl">
        {section.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        {section.columns.map((col, i) => {
          const { Icon, bg: iconBg } = COL_STYLES[i] || {};
          return (
            <div key={col.label}>
              {/* Column header: iOS icon + big title */}
              <div className="flex items-center gap-3 mb-6">
                {Icon && (
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold text-gray-900">{col.label}</h3>
              </div>

              <ul className="divide-y divide-gray-100">
                {col.items.map((item, j) => (
                  <ColItem key={j} item={item} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
