import Breadcrumb from '@/components/ui/BreadCrumb';
import CourseHero from '@/components/ui/HeroCorso';
import CourseTabs from '@/components/corsi/tabs/TabsCorso';
import CourseCalendar from '@/components/ui/CalendarioCorsi';
import CourseVideo from '@/components/corsi/VideoCorso';
import CourseTeachers from '@/components/corsi/TeacherCorsi';
import Banner from '@/components/ui/Banner';
import FeatureBar from '@/components/ui/FeatureBar';

import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/lib/queries/courses';
import type { Metadata } from 'next';

import FaqTab from '@/components/corsi/tabs/FAQTab';
import OverviewTab from '@/components/corsi/tabs/OverViewTab';
import CertificationTabs from '@/components/corsi/tabs/CertificationTabs';
import ProgramsTabs from '@/components/corsi/tabs/ProgramsTabs';

function formatCurrency(value?: number | null) {
  if (!value) return '1.000€ + IVA';

  return `${value.toLocaleString('it-IT')}€ + IVA`;
}

const IRATA_LEVELS = ['Livello 1', 'Livello 2', 'Livello 3'];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return { title: 'Corso non trovato' };
  }

  return {
    title: course.title,
    description:
      course.description ||
      `Corso ${course.title} - ${course.category.name}. ${course.durationDays} giorni, prezzo ${course.price}€. Certificazione valida ${course.certificateDuration} anni.`,
  };
}

export default async function CorsiPage({ params }: Props) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseLevels =
    course.slug.toLowerCase().includes('irata') || course.title.toLowerCase().includes('irata') ? IRATA_LEVELS : [];

  const events = course.sessions.map((session) => ({
    id: session.id,
    day: session.startDate.getDate().toString(),
    month: session.startDate.toLocaleDateString('it-IT', {
      month: 'short',
      year: 'numeric',
    }),
    category: course.category.name,
    title: course.title,
    href: `/corsi/${course.slug}/iscrizione?session=${encodeURIComponent(session.id)}`,
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

        <section className="pb-16">
          <CourseCalendar course={course} defaultView="list"/>
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
