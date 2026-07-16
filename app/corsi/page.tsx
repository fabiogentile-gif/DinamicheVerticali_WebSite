

import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/corsi/HeroCorso';
import CourseTabs from '@/components/corsi/TabsCorso';
import CourseCalendar from '@/components/corsi/CalendarioCorso';
import CourseVideo from '@/components/corsi/VideoCorso';
import CourseTeachers from '@/components/corsi/TeacherCorsi';
import Banner from '@/components/ui/Banner';
import OverviewTab from '@/components/corsi/tabs/OverViewTab';
import FeatureBar from '@/components/ui/FeatureBar';

import { mockCourse } from '@/lib/mock/Corsi';

function formatCurrency(value?: number | null) {
  if (!value) return '1.000€ + IVA';

  return `${value.toLocaleString('it-IT')}€ + IVA`;
}

export default async function CorsiPage() {
  const course = mockCourse;

  const events = course.sessions.map((session, index) => ({
    id: index + 1,
    day: session.startDate.getDate().toString(),
    month: session.startDate.toLocaleDateString('it-IT', {
      month: 'short',
      year: 'numeric',
    }),
    category: course.tag,
    title: course.title,
    href: `/corsi/${course.id}`,
  }));

  return (
    <>
      <Breadcrumb items={[{ label: 'Corsi', href: '/corsi' }, { label: course.title }]} />

      <main>
        <section>
          <CourseHero image={course.bannerImage} imageAlt={course.title} subtitle="Informazioni" title={course.title} />
        </section>

        <section>
          <CourseTabs
            tabs={[
              {
                id: 'overview',
                title: 'Panoramica',
                content: (
                  <OverviewTab
                    location={course.detail.location}
                    duration={`${course.durationDays} giorni formazione + ${course.examDays} giorno esame`}
                    schedule={course.detail.schedule}
                    price={formatCurrency(course.price)}
                    certificate={course.detail.certificate}
                    requirements={course.detail.requirements}
                    description={course.detail.description}
                    target={course.detail.target}
                  />
                ),
              },
            ]}
          />
        </section>

        <section>
          <CourseCalendar
            title="Calendario"
            subtitle="Scopri le prossime date del corso"
            description="Seleziona il livello per filtrare le date disponibili."
            events={events}
            levels={course.levels}
          />
        </section>

        <section>
          <Banner
            subtitle="NON TROVI QUELLO CHE CERCHI?"
            title="ti aiutiamo noi!"
            buttonText="Contattaci"
            buttonHref="/contatti"
          />
        </section>

        <section>
          <CourseVideo
            title="Video"
            subtitle={`Scopri come si svolge il corso ${course.title}`}
            videoUrl={course.detail.videoUrl}
            thumbnail={course.detail.videoThumbnail}
          />
        </section>

        <section>
          <CourseTeachers
            title="Formatori"
            subtitle="Ti presentiamo i nostri formatori"
            description="I formatori di Dinamiche Verticali Formazione sono professionisti con esperienza pluriennale."
            teachers={course.teachers}
          />
        </section>

        <section>
          <FeatureBar />
        </section>
      </main>
    </>
  );
}
