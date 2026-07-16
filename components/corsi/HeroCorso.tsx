import Image from "next/image";

interface CourseHeroProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
}

export default function CourseHero({ image, imageAlt, subtitle, title }: CourseHeroProps) {
  return (
    <section className="bg-white py-7">
      <div className="container mx-auto flex max-w-4xl items-center justify-center gap-8 px-5">
        <div className="flex h-24 items-center justify-center">
          <Image src={image} alt={imageAlt} width={150} height={100} />
        </div>

        <div className="flex-1 text-center">
          <p className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">
            {subtitle}
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold uppercase text-zinc-900">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}