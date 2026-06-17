import * as Icons from 'lucide-react';
import { theme } from '../../theme.js';

export function Eyebrow({ icon, label }) {
  if (!label) return null;
  const Icon = (icon && Icons[icon]) || Icons.Sparkles;
  return (
    <div className={`flex items-center gap-2 ${theme.accentText} mb-6`}>
      <Icon className="w-4 h-4" />
      <p className="font-label text-xs tracking-widest">{label}</p>
    </div>
  );
}
