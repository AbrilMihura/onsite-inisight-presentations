import { content } from './content.js';
import Header        from './sections/Header.jsx';
import FloatingIndex from './sections/FloatingIndex.jsx';
import Hero          from './sections/Hero.jsx';
import Closing       from './sections/Closing.jsx';
import Footer        from './sections/Footer.jsx';

import TextSlide     from './sections/slides/TextSlide.jsx';
import BulletsSlide  from './sections/slides/BulletsSlide.jsx';
import TwoColSlide   from './sections/slides/TwoColSlide.jsx';
import StatsSlide    from './sections/slides/StatsSlide.jsx';
import QuoteSlide    from './sections/slides/QuoteSlide.jsx';
import TimelineSlide from './sections/slides/TimelineSlide.jsx';
import ImageSlide      from './sections/slides/ImageSlide.jsx';
import ThreeColSlide   from './sections/slides/ThreeColSlide.jsx';
import EpicsSlide      from './sections/slides/EpicsSlide.jsx';
import PricingSlide    from './sections/slides/PricingSlide.jsx';

const SLIDE_COMPONENTS = {
  text:        TextSlide,
  bullets:     BulletsSlide,
  'two-col':   TwoColSlide,
  'three-col': ThreeColSlide,
  epics:       EpicsSlide,
  stats:       StatsSlide,
  quote:       QuoteSlide,
  timeline:    TimelineSlide,
  image:       ImageSlide,
  pricing:     PricingSlide,
};

export default function App() {
  const indexSections = content.sections.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <Header />
      <FloatingIndex sections={indexSections} />
      <main>
        <Hero />
        {content.sections.map((s, i) => {
          const Slide = SLIDE_COMPONENTS[s.type];
          if (!Slide) return <UnknownTypeSlide key={s.id} section={s} />;
          return <Slide key={s.id} section={s} alt={i % 2 === 1} />;
        })}
        <Closing />
      </main>
      <Footer />
    </>
  );
}

function UnknownTypeSlide({ section }) {
  return (
    <section
      id={section.id}
      className="min-h-screen bg-red-50 px-8 md:px-24 py-32 flex flex-col justify-center"
    >
      <p className="font-mono text-sm text-red-700 mb-2">
        Unknown slide type: <strong>{section.type}</strong>
      </p>
      <p className="text-xl">
        Add a component to <code>src/sections/slides/</code> and register it in{' '}
        <code>SLIDE_COMPONENTS</code>.
      </p>
    </section>
  );
}
