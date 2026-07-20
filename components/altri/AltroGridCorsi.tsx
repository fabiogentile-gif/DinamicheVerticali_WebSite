import CategoryCard from '@/components/altri/CardCategoria';

interface Props {
  categories: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    image: string | null;
    _count: {
      courses: number;
    };
  }[];
}

export default function OtherCoursesGrid({ categories }: Props) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.name}
          description={category.description ?? ''}
          count={category._count.courses}
          href={`/categorie/${category.slug}`}
        />
      ))}
    </section>
  );
}
