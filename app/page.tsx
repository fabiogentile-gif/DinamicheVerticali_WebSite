
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Filter from "@/components/ui/Filter";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <section className="flex flex-col items-center w-full">

          <h1 className="text-amber-600 my-10 text-center">
            CALENDARIO PROSSIMI CORSI
          </h1>

          {/* BARRA DI RICERCA/NUMERO RISULTATI */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>8 Corsi disponibili</CardTitle>
                </CardHeader>
              </Card>

              {/* FILTRO PER CORSI */}
              <div className="flex flex-row gap-5 justify-center my-10">
                <Filter />
              </div>

              

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
