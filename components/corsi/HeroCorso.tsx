import Image from "next/image";

interface CourseHeroProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
}

export default function CourseHero({ image, imageAlt, subtitle, title }: CourseHeroProps) {
  return (
    <section className="bg-white pt-20 pb-15">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-8">
          <div className="flex h-24 items-center">
            <Image src={image} alt={imageAlt} width={250} height={200} />
          </div>

          <div className="flex-1 text-left">
            <p className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">
              {subtitle}
            </p>

            <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-zinc-900">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}