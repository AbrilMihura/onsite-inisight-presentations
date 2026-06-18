import { useState } from 'react';
import { Code2, FlaskConical, Layers, Users, Target, BarChart2 } from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

const ICON_MAP = { Code2, FlaskConical, Layers, Users, Target, BarChart2 };

export default function TwoColSlide({ section, alt }) {
  const tooltips = section.timeline ? {
    Development: section.left?.items,
    Research:    section.right?.items,
  } : null;

  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} bg-dotgrid px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-16">{section.heading}</h2>
        {section.timeline && <Timeline items={section.timeline} tooltips={tooltips} />}
        {!section.timeline && (
          <div className="grid md:grid-cols-2 gap-16">
            <Column data={section.left} accent />
            <Column data={section.right} />
          </div>
        )}}
      </div>
    </section>
  );
}

function TimelineBar({ row, tooltip, single }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-150 ${tooltip ? 'cursor-pointer' : 'cursor-default'} ${single ? 'flex-1' : ''}`}
      style={{ backgroundColor: row.bg, boxShadow: hovered && tooltip ? '0 4px 16px rgba(0,0,0,0.15)' : 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Role tag */}
      {row.role && (
        <span
          className="text-xs font-semibold tracking-widest uppercase flex-shrink-0 px-2 py-0.5 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: row.textColor }}
        >
          {row.role}
        </span>
      )}
      <span className="text-sm font-medium leading-snug" style={{ color: row.textColor }}>
        {row.label}
      </span>

      {/* Hover tooltip */}
      {hovered && tooltip && (
        <div className="absolute bottom-full left-0 mb-3 w-80 bg-white rounded-2xl shadow-xl p-5 z-50 border border-gray-100">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: row.bg }}
          >
            {row.role}
          </p>
          <ul className="space-y-2.5">
            {tooltip.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-gray-700 leading-snug">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: row.bg }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Timeline({ items, tooltips }) {
  return (
    <div className="mt-14 pt-10 border-t border-gray-100">
      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">Timeline</p>
      <div className="flex gap-3 items-stretch">
        {items.map((item, i) => (
          <div
            key={i}
            style={{ flex: item.current ? '0 0 28%' : '1' }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500">{item.period}</span>
              {item.current && (
                <span
                  className="text-xs font-semibold text-white px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: '#0584A4' }}
                >
                  Now
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {item.rows.map((row, j) => (
                <TimelineBar
                  key={j}
                  row={row}
                  tooltip={tooltips && row.role ? tooltips[row.role] : null}
                  single={item.rows.length === 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-400">Hover each bar to see the goals →</p>
    </div>
  );
}

function Column({ data, accent }) {
  const Icon = data.icon ? ICON_MAP[data.icon] : null;
  return (
    <div>
      {Icon && (
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
          style={{ backgroundColor: data.iconBg || '#9ca3af' }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
      )}
      <h3 className={`font-display text-2xl font-semibold mb-6 ${accent ? theme.accentText : 'text-gray-500'}`}>
        {data.title}
      </h3>
      <ul className="space-y-4">
        {data.items.map((item, i) => (
          <li key={i} className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-2 border-am-grey pl-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
