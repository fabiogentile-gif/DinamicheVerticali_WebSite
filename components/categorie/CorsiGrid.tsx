import CourseCard from './CourseCard';
import LinkButton from '@/components/ui/Linkbutton';
import { GraduationCap } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  price: number | null;
  durationDays?: number | null;
  certificateDuration?: number | null;
  category: {
    name: string;
  };
  sessions?: {
    startDate: Date | string;
  }[];
}

interface CorsiGridProps {
  courses: Course[];
}

export default function CorsiGrid({ courses }: CorsiGridProps) {
  if (!courses || courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center my-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          <GraduationCap size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold uppercase text-[#1e1e1c]">
          Nessun Corso Programmato
        </h3>
        <p className="mt-2 max-w-md text-sm text-neutral-600">
          Al momento non ci sono corsi a calendario in questa categoria. Possiamo organizzare sessioni personalizzate
          presso la tua azienda o notificarti non appena le nuove date saranno pubblicate.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <LinkButton title="Richiedi Informazioni" href="/contatti" bg />
          <LinkButton title="Tutte le Categorie" href="/categorie" />
        </div>
      </div>
    );
  }

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
          durationDays={course.durationDays}
          certificateDuration={course.certificateDuration}
          sessions={course.sessions}
        />
      ))}
    </div>
  );
}