import TeamCard from "@/components/ui/TeamCard";

interface Teacher {
  id: string;
  name: string;
  role: string;
  languages: string;
  image: string;
}

interface CourseTeachersProps {
  title: string;
  subtitle: string;
  description: string;
  teachers: Teacher[];
}

export default function CourseTeachers({
  title,
  subtitle,
  description,
  teachers,
}: CourseTeachersProps) {
  return (
    <section className="bg-white py-7">
      <div className="container mx-auto px-5">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-heading text-3xl font-semibold uppercase text-burning-orange-400">
            {title}
          </p>

          <h2 className="mt-2 font-heading text-4xl font-bold uppercase">
            {subtitle}
          </h2>

          <p className="mt-3">{description}</p>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {teachers.map((teacher) => (
            <TeamCard
              key={teacher.id}
              name={teacher.name}
              role={teacher.role}
              languages={teacher.languages}
              image={teacher.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}