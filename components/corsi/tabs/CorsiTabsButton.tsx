'use client';

import { ChevronDown } from 'lucide-react';

interface Props {
  title: string;
  active: boolean;
  dropdown?: boolean;
  onClick: () => void;
}

export default function CorsiTabsButton({ title, active, dropdown, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 items-center gap-2 border px-5 text-sm font-medium transition-colors ${
        active
          ? 'border-primary bg-primary text-white'
          : 'border-border bg-background text-foreground hover:border-primaryhover:text-burning-orange-400'
      }`}
    >
      <span>{title}</span>
      {dropdown && <ChevronDown size={16} />}
    </button>
  );
}