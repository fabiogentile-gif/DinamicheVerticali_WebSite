import LinkButton from "@/components/ui/Linkbutton";

interface CourseCardProps {
  title: string;
  description?: string | null;
  category: string;
  price?: number | null;
  slug: string;
}

export default function CourseCard({
  title,
  description,
  category,
  price,
  slug,
}: CourseCardProps) {
  return (
    <article className="border bg-white p-6 transition hover:border-[#FF6316]">
      <span className="text-sm font-bold uppercase text-[#FF6316]">
        {category}
      </span>

      <h3 className="mt-3 text-2xl font-bold uppercase">
        {title}
      </h3>

      <p className="mt-4 text-neutral-600">
        {description}
      </p>

      {price && (
        <p className="mt-5 font-bold">
          {price.toLocaleString("it-IT")}€ + IVA
        </p>
      )}

      <div className="mt-6">
        <LinkButton
          title="Scopri il corso"
          href={`/corsi/${slug}`}
          bg
        />
      </div>
    </article>
  );
}