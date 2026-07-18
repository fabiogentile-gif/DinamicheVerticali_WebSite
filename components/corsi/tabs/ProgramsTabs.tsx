interface ProgrammaTabProps {
  title?: string;
  subtitle?: string;
  items: string[];
  description?: string;
  buttonText?: string;
}

export default function ProgramsTabs({ title = 'PROGRAMMA', subtitle = 'Obiettivi del corso', items, description, buttonText = 'CONTATTACI' }: ProgrammaTabProps) {
  return (
    <div className="bg-white">
      <div className="px-3 py-2">
        <span className="text-xl font-bold text-[#ff6316]">{title}</span>
      </div>

      <div className="px-3 pb-3 pt-2">
        <h3 className="mb-2 text-lg font-semibold text-[#1e1e1c]">{subtitle}</h3>

        <ul className="space-y-1.5 text-sm text-[#444]">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-[#ff6316]">•</span>
              {item}
            </li>
          ))}
        </ul>

        {description && (
          <div className="mt-4 flex items-center justify-between gap-4 pt-3">
            <p className="max-w-xl text-sm text-[#444]">{description}</p>

            <button className="group flex shrink-0 items-center gap-2 text-sm font-bold text-[#ff6316]">
              {buttonText}
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}