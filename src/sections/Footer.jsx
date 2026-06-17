import { content } from '../content.js';
import { logos } from '../logos.js';

export default function Footer() {
  if (content.meta.footer === false) return null;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-am-grey-light border-t border-am-grey px-8 md:px-16 py-6 flex items-center justify-between">
      <a
        href="https://amalgama.co"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Amalgama"
        className="inline-block opacity-80 hover:opacity-100 transition"
      >
        <img src={logos.footerLogo} alt="Amalgama" className="h-5 md:h-6 w-auto" />
      </a>
      <span className="flex items-center gap-2 text-xs text-gray-500">
        <span>©&nbsp;{year}</span>
        <img src={logos.footerIcon} alt="Amalgama" className="w-5 h-5 rounded-sm" />
        <span>·&nbsp;amalgama.co</span>
      </span>
    </footer>
  );
}
