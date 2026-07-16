interface CalendarFiltersProps {
  levels: string[];
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

export default function CalendarFilters({
  levels,
  selectedLevel,
  onLevelChange,
}: CalendarFiltersProps) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onLevelChange(level)}
          className={`px-4 py-2 font-medium transition-colors ${
            selectedLevel === level
              ? "bg-burning-orange-400 text-white"
              : "border border-border bg-white hover:border-burning-orange-400"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}