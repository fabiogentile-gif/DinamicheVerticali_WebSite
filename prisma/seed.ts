import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

const languagesData = [{ name: 'Italiano' }, { name: 'Inglese' }, { name: 'Francese' }];

const rolesData = [
  { name: 'IRATA L3/i' },
  { name: 'Formatore PTI' },
  { name: 'Formatore GWO' },
  { name: 'Guida Alpina' },
  { name: 'IRATA Technical Authority' },
];

const employeesData = [
  {
    id: 'diego-maltenti',
    name: 'Diego',
    surname: 'Maltenti',
    languages: ['Italiano', 'Inglese'],
    roles: ['IRATA L3/i', 'IRATA Technical Authority', 'Formatore GWO'],
    image: '/employees/diego-maltenti.png',
  },
  {
    id: 'franco-bignami',
    name: 'Franco',
    surname: 'Bignami',
    languages: ['Italiano'],
    roles: ['IRATA L3/i'],
    image: '/employees/franco-bignami.png',
  },
  {
    id: 'giuseppe-barucco',
    name: 'Giuseppe',
    surname: 'Barucco',
    languages: ['Italiano', 'Francese'],
    roles: ['Formatore PTI', 'Guida Alpina'],
    image: '/employees/giuseppe-barucco.png',
  },
  {
    id: 'michele-perotti',
    name: 'Michele',
    surname: 'Perotti',
    languages: ['Italiano', 'Inglese', 'Francese'],
    roles: ['Formatore PTI', 'Guida Alpina'],
    image: '/employees/michele-perotti.png',
  },
  {
    id: 'alberto-fantone',
    name: 'Alberto',
    surname: 'Fantone',
    languages: ['Italiano', 'Francese'],
    roles: ['Formatore PTI', 'Guida Alpina'],
    image: '/employees/alberto-fantone.png',
  },
  {
    id: 'luigi-gagliardi',
    name: 'Luigi',
    surname: 'Gagliardi',
    languages: ['Italiano', 'Inglese'],
    roles: ['Formatore PTI', 'Guida Alpina'],
    image: '/employees/luigi-gagliardi.png',
  },
];

const coursesData = [
  {
    title: 'Fune - Modulo A',
    description:
      'Formazione dei Lavoratori Addetti a lavori temporanei in quota con impiego di sistemi di accesso e posizionamento mediante funi',
    category: 'Fune D.Lgs. 81/08',
    certificateDuration: 5,
    price: 800,
    durationDays: 4,
    examDays: null,
    sessions: [{ startDate: new Date('2026-09-28') }],
  },
  {
    title: 'Aggiornamento lavoratori addetti ai sistemi di accesso e posizionamento mediante funi',
    description:
      "Il corso ha lo scopo di ottemperare all'aggiornamento obbligatorio quinquennale in ottemperanza all'art. 116 D.lgs 81-08 ed allegato XXI",
    category: 'Fune D.Lgs. 81/08',
    certificateDuration: 5,
    price: 275,
    durationDays: 1,
    examDays: null,
    sessions: [{ startDate: new Date('2026-10-02') }],
  },
  {
    title: 'Preposti con funzioni di sorveglianza dei lavori temporanei in quota mediante funi',
    description:
      'Il corso ha lo scopo di addestrare i lavoratori alla gestione delle emergenze ed alle tecniche di evacuazione su fune',
    category: 'Fune D.Lgs. 81/08',
    certificateDuration: 5,
    price: 275,
    durationDays: 1,
    examDays: null,
    sessions: [{ startDate: new Date('2026-10-02') }],
  },

  {
    title: 'GWO BST (FA+WAH+MH+FAW)',
    description:
      'Il Basic Safety Training nasce per garantire una formazione di base a tutti i tecnici che intendono intraprendere un percorso professionale nel settore eolico.',
    category: 'GWO',
    certificateDuration: 2,
    price: 1100,
    durationDays: 4,
    examDays: null,
    sessions: [{ startDate: new Date('2026-10-20') }],
  },

  {
    title: 'Certificazione IRATA L1/L2/L3',
    description:
      'Irata è la più importante e autorevole associazione al mondo per il lavoro e l’addestramento su doppia fune. Certificarsi IRATA significa sottoporsi ad un addestramento completo ed intenso e ad un esame finale.',
    category: 'IRATA',
    certificateDuration: 3,
    price: 1000,
    durationDays: 4,
    examDays: null,
    sessions: [
      { startDate: new Date('2026-07-13') },
      { startDate: new Date('2026-08-31') },
      { startDate: new Date('2026-09-21') },
      { startDate: new Date('2026-10-19') },
    ],
  },

  {
    title: 'Aggiornamento Revisioni Periodiche DPI Petzl',
    description:
      "Mantenimento delle capacità e aggiornamento delle conoscenze per la verifica approfondita dei DPI contro le cadute dall'alto.",
    category: 'PTI',
    certificateDuration: 3,
    price: 275,
    durationDays: 1,
    examDays: null,
    sessions: [
      { startDate: new Date('2026-07-21') },
      { startDate: new Date('2026-09-08') },
      { startDate: new Date('2026-10-13') },
    ],
  },

  {
    title: 'Revisioni Periodiche DPI Petzl',
    description:
      'Attraverso questa formazione il candidato acquisirà conoscenze e capacità adeguate al fine di esaminare a fondo i DPI anticaduta.',
    category: 'PTI',
    certificateDuration: 3,
    price: 850,
    durationDays: 3,
    examDays: null,
    sessions: [
      { startDate: new Date('2026-07-22') },
      { startDate: new Date('2026-09-09') },
      { startDate: new Date('2026-10-14') },
    ],
  },

  {
    title: 'Modulo Rivenditori PRO Liv. 1',
    description:
      'Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL.',
    category: 'PTI',
    certificateDuration: 3,
    price: 275,
    durationDays: 1,
    examDays: null,
    sessions: [{ startDate: new Date('2026-09-22') }],
  },

  {
    title: 'Modulo Rivenditori PRO Liv. 2',
    description:
      'Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL per l’identificazione dei DPI specifici per l’accesso su fune.',
    category: 'PTI',
    certificateDuration: 3,
    price: 275,
    durationDays: 1,
    examDays: null,
    sessions: [{ startDate: new Date('2026-09-23') }],
  },

  {
    title: 'Modulo Rivenditori PRO Liv. 3',
    description:
      'Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL per l’identificazione dei DPI specifici per l’accesso su fune e soccorso.',
    category: 'PTI',
    certificateDuration: 3,
    price: 550,
    durationDays: 2,
    examDays: null,
    sessions: [{ startDate: new Date('2026-09-24') }],
  },

  {
    title: 'Formazione Formatori e Istruttori DPI Anticaduta Procedure, Tecniche di Salvataggio ed Evacuazione',
    description:
      'Il corso è valido quale aggiornamento per RSPP/ASPP e CSP/CSE e come Formatori sulla sicurezza ai sensi del D.I. 6/3/2013.',
    category: 'Corsi accreditati',
    certificateDuration: 3,
    price: 700,
    durationDays: 2,
    examDays: null,
    sessions: [{ startDate: new Date('2026-09-14') }],
  },

  {
    title: 'Soccorso Tecnico',
    description:
      "ITRA (International Technical Rescue Association) è un'associazione internazionale impegnata a promuovere gli standard di soccorso tecnico.",
    category: 'ITRA',
    certificateDuration: 3,
    price: 1200,
    durationDays: 4,
    examDays: 1,
    sessions: [{ startDate: new Date('2026-07-20') }, { startDate: new Date('2026-09-07') }],
  },

  {
    title: 'Formazione ed addestramento ai sistemi di accesso e salvataggio in spazi confinati',
    description: 'Formazione ed addestramento ai sistemi di accesso e salvataggio in spazi confinati.',
    category: 'Spazi confinati',
    certificateDuration: 5,
    price: 350,
    durationDays: 2,
    examDays: null,
    sessions: [{ startDate: new Date('2026-07-27') }, { startDate: new Date('2026-10-01') }],
  },
];

async function main() {
  await prisma.courseSession.deleteMany();
  await prisma.course.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.language.deleteMany();
  await prisma.role.deleteMany();

  for (const language of languagesData) {
    await prisma.language.create({
      data: language,
    });
  }

  for (const role of rolesData) {
    await prisma.role.create({
      data: role,
    });
  }

  const languages = await prisma.language.findMany();
  const roles = await prisma.role.findMany();

  for (const employee of employeesData) {
    await prisma.employee.create({
      data: {
        id: employee.id,
        name: employee.name,
        surname: employee.surname,
        image: employee.image,

        languages: {
          connect: languages.filter((lang) => employee.languages.includes(lang.name)).map((lang) => ({ id: lang.id })),
        },

        roles: {
          connect: roles.filter((role) => employee.roles.includes(role.name)).map((role) => ({ id: role.id })),
        },
      },
    });
  }

  for (const course of coursesData) {
    const { sessions, ...courseData } = course;

    await prisma.course.create({
      data: {
        ...courseData,
        sessions: {
          create: sessions,
        },
      },
    });
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
