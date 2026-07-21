import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RegistrationForm from '@/components/iscrizione/RegistrationForm';
import Banner from '@/components/ui/Banner';
import Breadcrumb from '@/components/ui/BreadCrumb';
import { getCourseBySlug } from '@/lib/queries/courses';

function formatSessionRange(startDate: Date, endDate: Date | null) {
  const start = startDate.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  if (!endDate) {
    return start;
  }

  const end = endDate.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return `${start} – ${end}`;
}


interface Props {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    session?: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Iscrizione corso',
    };
  }

  return {
    title: `Iscrizione | ${course.title}`,
    description: `Compila il form per iscriverti al corso ${course.title}.`,
  };
}

export default async function CourseRegistrationPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { session: sessionParam } = await searchParams;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const sessions = course.sessions.map((session) => ({
    id: session.id,
    label: formatSessionRange(session.startDate, session.endDate),
  }));

  const defaultSessionId = sessions.some((session) => session.id === sessionParam) ? sessionParam : undefined;

  return (
    <>
      <Breadcrumb
        items={[
          {
            label: 'Categorie',
            href: '/categorie',
          },
          {
            label: course.category.name,
            href: `/categorie/${course.category.slug}`,
          },
          {
            label: course.title,
            href: `/corsi/${course.slug}`,
          },
          {
            label: 'Iscrizione',
          },
        ]}
      />

      <main className="bg-white text-[#1e1e1c]">
        <section className="px-6 py-8 sm:px-8 sm:py-10">
          <header className="mx-auto mb-8 max-w-[800px] text-center uppercase">
            <p className="font-heading text-[28px] font-semibold text-primary">Iscrizione</p>
            <h1 className="font-heading mt-2 text-4xl font-bold">Compila il form per iscriverti al corso</h1>
          </header>

          <RegistrationForm
            courseTitle={course.title}
            courseSlug={course.slug}
            sessions={sessions}
            defaultSessionId={defaultSessionId}
          />
        </section>

        <Banner
          subtitle="Serve aiuto?"
          title="Ti aiutiamo a trovare il corso giusto!"
          buttonText="Contattaci"
          buttonHref="/contatti"
        />
      </main>
    </>
  );
}
