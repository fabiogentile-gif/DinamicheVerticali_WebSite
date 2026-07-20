import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  price: number | null;
  category: {
    name: string;
  };
}

interface CorsiGridProps {
  courses: Course[];
}

export default function CorsiGrid({ courses }: CorsiGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          category={course.category.name}
          price={course.price}
          slug={course.slug}
        />
      ))}
    </div>
  );
}