import { ArrowUpRight } from 'lucide-react';

interface LinkButtonProps {
  title: string;
  href: string;
  bg?: boolean;
  arrow?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function LinkButton({
  title,
  href,
  bg = false,
  arrow = false,
  backgroundColor = '#ff6316',
  textColor = '#1e1e1c',
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-12 items-center justify-center px-8"
      style={{
        color: bg ? '#ffffff' : textColor,
      }}
    >
      {bg ? (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 48" preserveAspectRatio="none">
          <path d="M0 0 H200 V48 H12 L0 36 Z" fill={backgroundColor} />

          <path d="M0 36 L12 48" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        </svg>
      ) : (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 48" preserveAspectRatio="none">
          <path d="M0 36 L12 48 H200 V0 H0 Z" fill="white" stroke="#1e1e1c" strokeWidth="3" />
        </svg>
      )}

      <span className="relative z-10 flex items-center gap-2 font-semibold uppercase">
        {title}
        {arrow && <ArrowUpRight size={20} />}
      </span>
    </a>
  );
}
