import { Card, CardHeader, CardTitle, } from "@/components/ui/card"

import EmblaCarousel from "@/components/home/EmblaCarousel";
import CardCorsi from "@/components/home/CardCorsi";
import CalendarioCorsi from "@/components/home/CalendarioCorsi";
import Filters from "@/components/home/Filters";

export default function Home({
  searchParams,
}: {
  searchParams: {
    name?: string
    category?: string
    duration?: string
  }
}) {

  const courses = await getCourses()

  const filtered = courses.filter((c) => {
    if (searchParams.name &&
      !c.name.toLowerCase().includes(searchParams.name.toLowerCase())
    ) return false

    if (searchParams.category &&
      c.category !== searchParams.category
    ) return false

    if (searchParams.duration &&
      c.duration !== Number(searchParams.duration)
    ) return false

    return true
  })

  return (
    <div className="pt-24">
      <main>
        <section id="home">
          <EmblaCarousel />
        </section>

        {/* CORSI */}
        <section id="corsi" className="flex flex-col items-center w-full my-10">

          <div className="flex justify-center w-full my-15">
            <div className="w-[80%]">
              <h2 className="text-xl font-bold">
                I NOSTRI <span className="text-primary">CORSI</span>
              </h2>
              <div className="flex justify-center my-10">
                <div className="pt-24">
                  <Filters />

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {filtered.map((course) => (
                      <div key={course.id}>{course.name}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
                <CardCorsi />
              </div>
            </div>
          </div>
        </section>

        {/* calendario */}
        <section id="calendario" className="my-20">
          <CalendarioCorsi />
        </section>
      </main>
    </div>
  );
}
