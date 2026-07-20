import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/corsi/HeroCorso';
import CourseTabs from '@/components/corsi/tabs/TabsCorso';
import CourseCalendar from '@/components/corsi/CalendarioCorso';
import CourseVideo from '@/components/corsi/VideoCorso';
import CourseTeachers from '@/components/corsi/TeacherCorsi';
import Banner from '@/components/ui/Banner';
import FeatureBar from '@/components/ui/FeatureBar';

import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/lib/queries/courses';

import FaqTab from '@/components/corsi/tabs/FAQTab';
import OverviewTab from '@/components/corsi/tabs/OverViewTab';
import CertificationTabs from '@/components/corsi/tabs/CertificationTabs';
import ProgramsTabs from '@/components/corsi/tabs/ProgramsTabs';

function formatCurrency(value?: number | null) {
  if (!value) return '1.000€ + IVA';

  return `${value.toLocaleString('it-IT')}€ + IVA`;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CorsiPage({ params }: Props) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const events = course.sessions.map((session, index) => ({
    id: index + 1,
    day: session.startDate.getDate().toString(),
    month: session.startDate.toLocaleDateString('it-IT', {
      month: 'short',
      year: 'numeric',
    }),
    category: course.category.name,
    title: course.title,
    href: `/corsi/${course.slug}`,
  }));

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
          },
        ]}
      />

      <main>
        <section>
          <CourseHero
            image={course.category.image ?? '/logos/dinamiche-verticali.svg'}
            imageAlt={course.title}
            subtitle={course.category.name}
            title={course.title}
          />
        </section>

        <section>
          <CourseTabs
            tabs={[
              {
                id: 'overview',
                title: 'Panoramica',
                content: (
                  <OverviewTab
                    location={course.location ?? 'Via G. B. Feroggio 54, 10151 - Torino'}
                    duration={`${course.durationDays ? `${course.durationDays} giorni formazione` : ''}${course.durationDays && course.examDays ? ' + ' : ''}${course.examDays ? `${course.examDays} giorno esame` : ''}`}
                    price={formatCurrency(course.price)}
                    certificate={`${course.certificateDuration ?? 0} anni`}
                    description={course.description ?? ''}
                    requirements="Per accedere ai corsi occorre essere maggiorenni ed essere in buono stato salute"
                    target={[]}
                    schedule="9.00/17.30"
                  />
                ),
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
            levels={[]}
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
            videoUrl=""
            thumbnail=""
          />
        </section>

        {course.employees.length > 0 && (
          <section>
            <CourseTeachers
              title="Formatori"
              subtitle="Ti presentiamo i nostri formatori"
              description="I formatori di Dinamiche Verticali Formazione sono professionisti con esperienza pluriennale."
              teachers={course.employees}
            />
          </section>
        )}

        <section>
          <FeatureBar />
        </section>
      </main>
    </>
  );
}
