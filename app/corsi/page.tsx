import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/corsi/HeroCorso';
import CourseTabs from '@/components/corsi/tabs/TabsCorso';
import CourseCalendar from '@/components/corsi/CalendarioCorso';
import CourseVideo from '@/components/corsi/VideoCorso';
import CourseTeachers from '@/components/corsi/TeacherCorsi';
import Banner from '@/components/ui/Banner';
import FeatureBar from '@/components/ui/FeatureBar';

import { mockCourse } from '@/lib/mock/Corsi';

import FaqTab from '@/components/corsi/tabs/FAQTab';
import OverviewTab from '@/components/corsi/tabs/OverViewTab';
import CertificationTabs from '@/components/corsi/tabs/CertificationTabs';
import ProgramsTabs from '@/components/corsi/tabs/ProgramsTabs';

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
              {
                id: 'levels',
                title: 'Livelli',
                content: <div>Livelli</div>,
              },
              {
                id: 'program',
                title: 'Programma',
                content: (
                  <ProgramsTabs
                    items={[
                      'Conoscere la normativa di riferimento e utilizzare correttamente i DPI',
                      'Valutare i rischi e realizzare ancoraggi sicuri',
                      'Lavorare in sicurezza su corda ed effettuare soccorsi anche in condizioni difficili',
                      'Ottenere una certificazione riconosciuta a livello internazionale',
                    ]}
                    description="Contattaci per ricevere il programma completo del livello di certificazione per cui desideri frequentare il corso."
                  />
                ),
              },
              {
                id: 'certificate',
                title: 'Certificazione',
                content: (
                  <CertificationTabs
                    title="Certificazione"
                    items={[
                      {
                        icon: '✓',
                        title: 'Ente certificatore',
                        content: (
                          <>
                            <strong>IRATA International</strong>, la principale associazione mondiale per l accesso e il
                            lavoro su doppia fune.
                          </>
                        ),
                      },
                      {
                        icon: '⏳',
                        title: 'Validità e rinnovo',
                        content: (
                          <>
                            <p>
                              La certificazione IRATA ha una validità di <strong>3 anni</strong> dal conseguimento.
                            </p>
                            <p className="mt-2">
                              Entro la scadenza è necessario effettuare il <strong>rinnovo</strong>, frequentando un
                              corso di formazione della durata di <strong>2 giorni</strong>. Se la certificazione non
                              viene rinnovata entro la scadenza è necessario ripetere il corso.
                            </p>
                          </>
                        ),
                      },
                    ]}
                  />
                ),
              },
              {
                id: 'faq',
                title: 'FAQ',
                content: <FaqTab />,
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
