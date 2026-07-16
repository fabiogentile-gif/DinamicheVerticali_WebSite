import { prisma } from "@/lib/db/prisma";

export async function getCourses() {
  return prisma.course.findMany({
    include: {
      sessions: {
        orderBy: {
          startDate: "asc",
        },
      },
      employees: {
        include: {
          languages: true,
          roles: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCourseById(id: string) {
  return prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      sessions: {
        orderBy: {
          startDate: "asc",
        },
      },
      employees: {
        include: {
          languages: true,
          roles: true,
        },
      },
    },
  });
}

export async function getCoursesByCategory(category: string) {
  return prisma.course.findMany({
    where: {
      category,
    },
    include: {
      sessions: true,
      employees: {
        include: {
          languages: true,
          roles: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getUpcomingCourses() {
  return prisma.course.findMany({
    where: {
      sessions: {
        some: {
          startDate: {
            gte: new Date(),
          },
        },
      },
    },
    include: {
      sessions: {
        orderBy: {
          startDate: "asc",
        },
      },
    },
    orderBy: {
      sessions: {
        _count: "desc",
      },
    },
  });
}