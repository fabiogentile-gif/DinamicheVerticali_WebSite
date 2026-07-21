const stats = [
  { value: '15+', label: 'anni di attività' },
  { value: '2500', label: 'attestati rilasciati' },
  { value: '100%', label: 'formazione pratica' },
];

export default function AboutStats() {
  return (
    <section className="bg-primary px-6 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <p className="font-heading text-6xl leading-none font-bold sm:text-7xl">{stat.value}</p>
            <p className="mt-3 text-lg font-bold uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
