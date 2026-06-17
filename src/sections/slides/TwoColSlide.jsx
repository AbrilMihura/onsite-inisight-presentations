import { Code2, FlaskConical, Layers, Users, Target, BarChart2 } from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

const ICON_MAP = { Code2, FlaskConical, Layers, Users, Target, BarChart2 };

export default function TwoColSlide({ section, alt }) {
  return (
    <section
      id={section.id}
      className={`relative min-h-screen ${alt ? theme.section.altBg : theme.section.bg} bg-dotgrid px-8 md:px-24 py-32 flex flex-col justify-center`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Eyebrow icon={section.icon} label={section.eyebrow} />
        <h2 className="font-display text-5xl md:text-6xl font-semibold mb-16">{section.heading}</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <Column data={section.left} accent />
          <Column data={section.right} />
        </div>
      </div>
    </section>
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
