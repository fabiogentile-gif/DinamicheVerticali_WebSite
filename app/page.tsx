
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmblaCarousel from "@/components/home/EmblaCarousel";
import Filter from "@/components/ui/Filter";

export default function Home() {
  return (
    <div>
      <main>
        <section id="home">
          <EmblaCarousel />
        </section>

        <section id="corsi" className="flex flex-col items-center w-full">
          <h1 className="text-primary my-10 text-center">
            CALENDARIO PROSSIMI CORSI
          </h1>

          <div className="flex justify-center w-full">
            <div className="w-full max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>8 Corsi disponibili</CardTitle>
                </CardHeader>
              </Card>

              <div className="flex flex-row gap-5 justify-center my-10">
                <Filter />
              </div>
            </div>
          </div>
        </section>

        <section id="calendario">
          {/* calendario */}
        </section>
      </main>
    </div>
  );
}
