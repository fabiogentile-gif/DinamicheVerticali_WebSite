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
      className="relative inline-flex h-12 items-center justify-center px-8 clipped-bottom-left"
      style={{
        backgroundColor: bg ? backgroundColor : 'transparent',
        color: bg ? '#ffffff' : textColor,
      }}
    >
      {!bg && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 48" preserveAspectRatio="none">
          <path d="M12 48 L0 36 V0 H200 V48 Z" stroke="#1e1e1c" strokeWidth="4" fill="white" />
        </svg>
      )}

      <span className="relative z-10 flex items-center gap-2 font-semibold uppercase">
        {title}
        {arrow && <ArrowUpRight size={20} />}
      </span>
    </a>
  );
}
