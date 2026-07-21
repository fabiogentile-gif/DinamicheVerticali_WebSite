import CategoryCard from '@/components/categorie/CategoryCard';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  _count: {
    courses: number;
  };
}

interface CategorieGridProps {
  categories: Category[];
}

export default function CategorieGrid({ categories }: CategorieGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.name}
          description={category.description}
          count={category._count.courses}
          image={category.image}
          href={`/categorie/${category.slug}`}
        />
      ))}
    </div>
  );
}
