import { Card, CardHeader, CardTitle, } from "@/components/ui/card"

import EmblaCarousel from "@/components/home/EmblaCarousel";
import Filter from "@/components/ui/Filter";
import CardCorsi from "@/components/home/CardCorsi";

export default function Home() {
  return (
    <div className="pt-24">
      <main>
        <section id="home">
          <EmblaCarousel />
        </section>

        <section id="corsi" className="flex flex-col items-center w-full my-10">
          <h1 className="text-primary my-10 text-center">
            CORSI
          </h1>

          <div className="flex justify-center w-full">
            <div className="w-[80%]">
              <Card>
                <CardHeader>
                  <CardTitle>X Corsi disponibili</CardTitle>
                </CardHeader>
              </Card>

              <div className="flex justify-center my-10">
                <Filter />
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

        <section id="calendario" className="my-10">
          {/* calendario */}
        </section>
      </main>
    </div>
  );
}
