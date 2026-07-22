const reviews = [
  {
    quote: 'Professionalità e competenza sono il loro punto di forza.',
    author: 'Marco',
    image: '/testimonials/marco-testimonial.avif',
  },
  {
    quote: 'Accoglienti, preparati e professionali. Sempre eccezionale.',
    author: 'Camilo',
    image: '/testimonials/camilo-testimonial.avif',
  },
  {
    quote: 'Professionali e simpatici, sanno quello che fanno e lo trasmettono con passione.',
    author: 'Erik M.',
    image: '/testimonials/erik-testimonial.avif',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <p className="font-heading text-[28px] leading-none font-semibold uppercase text-primary">Recensioni</p>
          <h2 className="font-heading mt-2 text-4xl leading-none font-bold uppercase">
            Ecco cosa le persone dicono di noi
          </h2>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="overflow-hidden"
            >
              <div className="h-full border border-[#aaa] bg-[#f7f7f7] clipped-top-right">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={review.image}
                    alt={review.author}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg leading-relaxed">“{review.quote}”</p>
                  <div className="my-6 h-px bg-[#aaa]" />
                  <p className="font-heading text-2xl leading-none font-semibold uppercase text-primary">{review.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
