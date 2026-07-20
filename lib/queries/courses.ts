import { prisma } from '@/lib/db/prisma';

export async function getCourses() {
  return prisma.course.findMany({
    include: {
      category: true,
      sessions: {
        orderBy: {
          startDate: 'asc',
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

export async function getCourseById(id: string) {
  return prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      sessions: {
        orderBy: {
          startDate: 'asc',
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

export async function getCourseBySlug(slug: string) {
  return prisma.course.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
      sessions: {
        orderBy: {
          startDate: 'asc',
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

export async function getCoursesByCategory(categorySlug: string) {
  return prisma.course.findMany({
    where: {
      category: {
        slug: categorySlug,
      },
    },
    include: {
      category: true,
      sessions: true,
      employees: {
        include: {
          languages: true,
          roles: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
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
      category: true,
      sessions: {
        orderBy: {
          startDate: 'asc',
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
