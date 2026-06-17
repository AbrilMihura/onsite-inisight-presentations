import { Sparkles, Atom, X } from 'lucide-react';
import { logos } from '../logos.js';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-oi-navy text-white flex flex-col overflow-hidden"
    >
      {/* Background gradient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, #035A71 0%, #024758 35%, #01343F 60%, #000d11 100%)',
        }}
      />

      {/* Decorative icons — top right */}
      <div className="relative flex justify-end px-8 md:px-16 pt-8 gap-4 opacity-50">
        <Sparkles className="w-7 h-7 text-oi-light" />
        <X className="w-4 h-4 text-oi-100 mt-1" />
        <Atom className="w-8 h-8 text-oi-light" />
      </div>

      {/* Main two-column layout */}
      <div className="relative flex-1 flex items-center px-8 md:px-20 gap-0">
        {/* Left — dates + badges */}
        <div className="flex-1 pr-10 md:pr-16">
          <div className="flex gap-3 mb-8">
            <span className="border border-white/30 text-white/60 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold">
              Version 3.2
            </span>
            <span className="border border-white/30 text-white/60 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold">
              Client Review
            </span>
          </div>

          <h1
            className="font-display font-bold leading-none text-white"
            style={{ fontSize: 'clamp(5rem, 14vw, 11rem)', letterSpacing: '-0.04em' }}
          >
            July –<br />August
          </h1>
          <p
            className="font-display font-semibold text-oi-light mt-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            2026
          </p>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px self-stretch bg-white/15 mx-4 my-8" />

        {/* Right — OI logo */}
        <div className="hidden md:flex flex-1 pl-10 md:pl-16 items-center justify-center">
          <img
            src="/onsite-insight-logo.svg"
            alt="Onsite Insight"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Bottom bar — Amalgama logo */}
      <div className="relative px-8 md:px-20 pb-10 flex items-center justify-between">
        <a
          href="https://amalgama.co"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 opacity-60 hover:opacity-90 transition"
        >
          <img
            src={logos.footerLogo}
            alt="Amalgama"
            className="h-5 w-auto invert"
          />
        </a>
      </div>
    </section>
  );
}
