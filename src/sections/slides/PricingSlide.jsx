import { UserCheck, Code2, PenTool, Bug } from 'lucide-react';
import { Eyebrow } from './_Eyebrow.jsx';
import { theme } from '../../theme.js';

// OI brand hex values for team role icons
const TEAM = [
  { role: 'Product Owner', count: 1, Icon: UserCheck, bg: '#035A71' }, // oi-primary
  { role: 'Developer',     count: 2, Icon: Code2,     bg: '#01343F' }, // oi-navy
  { role: 'Designer',      count: 1, Icon: PenTool,   bg: '#046D89' }, // oi-mid
  { role: 'QA Engineer',   count: 1, Icon: Bug,       bg: '#0584A4' }, // oi-bright
];

export default function PricingSlide({ section, alt }) {
  const bg = alt ? theme.section.altBg : theme.section.bg;
  return (
    <section
      id={section.id}
      className={`min-h-screen ${bg} px-8 md:px-24 py-24 flex flex-col justify-center`}
    >
      <Eyebrow label={section.eyebrow} icon="DollarSign" />
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16 max-w-4xl">
        {section.heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Price */}
        <div>
          <p
            className="font-display font-bold leading-none mb-4"
            style={{
              fontSize: 'clamp(4.5rem, 14vw, 9rem)',
              letterSpacing: '-0.04em',
              color: '#035A71',
            }}
          >
            {section.price}
            <span className="font-display font-semibold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#33B7CF', letterSpacing: '-0.02em' }}>/mo</span>
</p>
          <p className="text-gray-500 text-lg">{section.priceLabel}</p>
        </div>

        {/* Team */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-7">
            Team
          </p>
          <div className="space-y-5">
            {TEAM.map(({ role, count, Icon, bg: iconBg }) => (
              <div key={role} className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-medium text-lg">{role}</span>
                  {count > 1 && (
                    <span
                      className="text-sm font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: iconBg }}
                    >
                      ×{count}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
