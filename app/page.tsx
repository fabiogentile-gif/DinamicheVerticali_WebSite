import EmblaCarousel from "@/components/home/EmblaCarousel";
import CorsiGrid from "@/components/home/CorsiGrid";
import CalendarioCorsi from "@/components/home/CalendarioCorsi";
import Filters from "@/components/home/Filters";
import CoursesPagination from "@/components/home/Pagination"

import { getCourses, getCoursesCount } from "@/lib/queries/courses";

type SearchParams = {
  name?: string;
  category?: string;
  duration?: string;
  page?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);
  const limit = 8;

  const [courses, total] = await Promise.all([
    getCourses({
      name: params.name,
      category: params.category,
      duration: params.duration ? Number(params.duration) : undefined,
      page,
      limit,
    }),
    getCoursesCount({
      name: params.name,
      category: params.category,
      duration: params.duration ? Number(params.duration) : undefined,
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pt-24">
      <main>
        <section id="home">
          <EmblaCarousel />
        </section>

        <section id="corsi" className="flex flex-col items-center w-full my-10">
          <div className="w-[60%]">
            <h2 className="text-xl font-bold">
              I NOSTRI <span className="text-primary">CORSI</span>
            </h2>

            <div className="my-10">
              <Filters />
            </div>

            {courses.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                Nessun corso trovato.
              </div>
            ) : (
              <CorsiGrid courses={courses} />
            )}
            <CoursesPagination
              totalPages={totalPages}
              currentPage={page}
            />
          </div>
        </section>

        <section id="calendario" className="my-20">
          <CalendarioCorsi />
        </section>
      </main>
    </div>
  );
}