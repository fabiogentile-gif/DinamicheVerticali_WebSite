interface OverviewTabProps {
  location: string;
  duration: string;
  schedule: string;
  price: string;
  certificate: string;
  requirements: string;
  description: string;
  target: string[];
}

export default function OverviewTab({
  location,
  duration,
  schedule,
  price,
  certificate,
  requirements,
  description,
  target,
}: OverviewTabProps) {
  return (
    <div className="space-y-5">
      <h2 className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">
        Panoramica
      </h2>

      <div className="space-y-1 font-semibold">
        <p>📍 Sede: {location}</p>
        <p>🕐 Durata: {duration}</p>
        <p>⏰ Orario: {schedule}</p>
        <p>💶 Quota: {price}</p>
        <p>📄 Attestato: {certificate}</p>
        <p>👤 Requisiti: {requirements}</p>
      </div>

      <p>{description}</p>

      <div>
        <h3 className="mb-2 font-semibold">A chi è rivolto</h3>

        <ul className="list-disc space-y-1 pl-5">
          {target.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}