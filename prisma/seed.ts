import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });

type CourseSeedData = {
    title: string;
    description: string;
    logo: string;
    tag: string;
    month: string | null;
    category: string;
    bannerImage: string | null;
    certificateDuration: number;
    price: number;
    durationDays: number | null;
    durationHours: number | null;
    examDays: number | null;
    featured: boolean;
    sessions: { startDate: Date }[];
};

const coursesData: CourseSeedData[] = [
    {
        title: "Fune - Modulo A",
        description:
            "Formazione dei Lavoratori Addetti a lavori temporanei in quota con impiego di sistemi di accesso e posizionamento mediante funi",
        logo: "/logos/logo-dinamiche-verticali-formazione.svg",
        tag: "Fune Italia",
        month: "SETTEMBRE",
        category: "Fune D.Lgs. 81/08",
        bannerImage: null,
        certificateDuration: 5,
        price: 800,
        durationDays: 4,
        durationHours: 32,
        examDays: null,
        featured: false,
        sessions: [{ startDate: new Date("2026-09-28") }],
    },
    {
        title: "Aggiornamento lavoratori addetti ai sistemi di accesso e posizionamento mediante funi",
        description:
            "Il corso ha lo scopo di ottemperare all'aggiornamento obbligatorio quinquennale (in ottemperanza all'art. 116 D.lgs 81-08 ed allegato XXI)",
        logo: "/logos/logo-dinamiche-verticali-formazione.svg",
        tag: "Fune Italia",
        month: "OTTOBRE",
        category: "Fune D.Lgs. 81/08",
        bannerImage: null,
        certificateDuration: 5,
        price: 275,
        durationDays: 1,
        durationHours: 8,
        examDays: null,
        featured: false,
        sessions: [{ startDate: new Date("2026-10-02") }],
    },
    {
        title: "Preposti con funzioni di sorveglianza dei lavori temporanei in quota mediante funi",
        description:
            "Il corso ha lo scopo di addestrare i lavoratori alla gestione delle emergenze ed alle tecniche di evacuazione su fune",
        logo: "/logos/logo-dinamiche-verticali-formazione.svg",
        tag: "Fune Italia",
        month: "OTTOBRE",
        category: "Fune D.Lgs. 81/08",
        bannerImage: null,
        certificateDuration: 5,
        price: 275,
        durationDays: 1,
        durationHours: 8,
        examDays: null,
        featured: false,
        sessions: [{ startDate: new Date("2026-10-02") }],
    },

    // GWO

    {
        title: "GWO BST (FA+WAH+MH+FAW)",
        description: "Il Basic Safety Training nasce per garantire una formazione di base a tutti i tecnici che intendono intraprendere un percorso professionale nel settore eolico. La maggior parte dei parchi eolici si trova lontano dai centri urbani, da qui l'importanza di sapere come reagire a possibili incidenti.",
        logo: "/logos/logo-global-wind-organisation.avif",
        tag: "GWO",
        month: "OTTOBRE",
        category: "GWO",
        bannerImage: null,
        certificateDuration: 2,
        price: 1100,
        durationDays: 4,
        durationHours: null,
        examDays: null,
        featured: false,
        sessions: [{ startDate: new Date("2026-10-20") }],
    },

    // IRATA

    {
        title: "Certificazione IRATA L1/L2/L3",
        description: "Irata è la più importante e autorevole associazione al mondo per il lavoro e l’addestramento su doppia fune. Certificarsi IRATA significa sottoporsi ad un addestramento completo ed intenso e ad un esame finale che se superato dà la possibilità di lavorare in sicurezza in tutto il mondo. Il processo di formazione, addestramento e valutazione è regolato dal (Training Assessment and Certification scheme) TACS.",
        logo: "/logos/logo-irata-international.avif",
        tag: "IRATA",
        month: null,
        category: "IRATA",
        bannerImage: null,
        certificateDuration: 3,
        price: 1000,
        durationDays: 4,
        durationHours: null,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-07-13") },
            { startDate: new Date("2026-09-21") },
            { startDate: new Date("2026-10-19") },
        ],
    },

    // PTI

    {
        title: "Aggiornamento Revisioni Periodiche DPI Petzl",
        description: "Mantenimento delle capacità e aggiornamento delle conoscenze per la verifica approfondita dei DPI (Dispositivi di protezione Individuale) contro le cadute dall'alto, nel ruolo di persona competente",
        logo: "/logos/logo-petzl-technical-institute.avif",
        tag: "PTI",
        month: null,
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 275,
        durationDays: 1,
        durationHours: 8,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-07-21") },
            { startDate: new Date("2026-09-08") },
            { startDate: new Date("2026-10-13") },
        ],
    },
    {
        title: "Revisioni Periodiche DPI Petzl",
        description: "Attraverso questa formazione il candidato acquisirà conoscenze e capacità adeguate al fine di esaminare a fondo i DPI anticaduta, attraverso il protocollo d'ispezione PETZL.",
        logo: "/logos/logo-petzl-technical-institute.avif",
        tag: "PTI",
        month: null,
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 850,
        durationDays: 3,
        durationHours: 21,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-07-22") },
            { startDate: new Date("2026-09-09") },
            { startDate: new Date("2026-10-14") },
        ],
    },
    {
        title: "Modulo Rivenditori PRO Liv. 1",
        description: "Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL, per approfondire le conoscenze tecnico-pratiche dei DPI anticaduta.",
        logo: "/logos/logo-petzl-technical-institute.avif",
        tag: "PTI",
        month: "SETTEMBRE",
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 275,
        durationDays: 1,
        durationHours: 8,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-09-22") },
        ],
    },
    {
        title: "Modulo Rivenditori PRO Liv. 2",
        description: "Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL per l’identificazione dei DPI specifici per l’accesso su fune",
        logo: "/logos/logo-petzl-technical-institute.avif",
        tag: "PTI",
        month: "SETTEMBRE",
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 275,
        durationDays: 1,
        durationHours: 8,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-09-23") },
        ],
    },
    {
        title: "Modulo Rivenditori PRO Liv. 3",
        description: "Indirizzato a rivenditori e tecnici-commerciali specializzati nella vendita dei prodotti anticaduta PETZL per l’identificazione dei DPI specifici per l’accesso su fune e soccorso",
        logo: "/logos/logo-petzl-technical-institute.avif",
        tag: "PTI",
        month: "SETTEMBRE",
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 550,
        durationDays: 2,
        durationHours: 16,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-09-24") },
        ],
    },

    // CORSI ACCREDITATI

    {
        title: "Formazione Formatori e Istruttori DPI Anticaduta Procedure, Tecniche di Salvataggio ed Evacuazione",
        description: "Il corso è valido quale aggiornamento per RSPP/ASPP e CSP/CSE e inoltre come Formatori sulla sicurezza ai sensi del D.I. 6/3/2013. Verranno rilasciati 16 crediti formativi.",
        logo: "/logos/logo-dinamiche-verticali-formazione.svg",
        tag: "PTI",
        month: "SETTEMBRE",
        category: "PTI",
        bannerImage: null,
        certificateDuration: 3,
        price: 700,
        durationDays: 2,
        durationHours: 16,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-09-14") },
        ],
    },

    // ITRA

    {
        title: "Soccorso Tecnico",
        description: "ITRA (International Technical Rescue Association) – Associazione Internazionale senza scopo di lucro impegnata a promuovere gli standard di soccorso tecnico in tutto il mondo.",
        logo: "/logos/international-technical-rescue-association.svg",
        tag: "ITRA",
        month: null,
        category: "ITRA",
        bannerImage: null,
        certificateDuration: 3,
        price: 1200,
        durationDays: 4,
        durationHours: null,
        examDays: 1,
        featured: false,
        sessions: [
            { startDate: new Date("2026-07-20") },
            { startDate: new Date("2026-09-07") },
        ],
    },

    // SPAZI CONFINATI

    {
        title: "Formazione ed addestramento ai sistemi di accesso e salvataggio in spazi confinati",
        description: "FORMAZIONE ED ADDESTRAMENTO AI SISTEMI DI ACCESSO E SALVATAGGIO IN SPAZI CONFINATI",
        logo: "/logos/logo-dinamiche-verticali-formazione.svg",
        tag: "Spazi confinati",
        month: null,
        category: "Spazi confinati",
        bannerImage: null,
        certificateDuration: 5,
        price: 350,
        durationDays: 2,
        durationHours: 12,
        examDays: null,
        featured: false,
        sessions: [
            { startDate: new Date("2026-07-27") },
            { startDate: new Date("2026-10-01") },
        ],
    },
];


async function main() {
    for (const { sessions, ...courseData } of coursesData) {
        await prisma.course.create({
            data: {
                ...courseData,
                sessions: { create: sessions },
            } as any,
        });
    }
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