import { prisma } from "@/lib/db/prisma";

type CourseFilters = {
  name?: string;
  category?: string;
  duration?: number;
  page?: number;
  limit?: number;
};

export async function getCourses(filters: CourseFilters = {}) {
  const page = filters.page ?? 1;
  const limit = filters.limit ?? 8;

  const courses = await prisma.course.findMany({
    where: {
      ...(filters.name && {
        title: {
          contains: filters.name,
        },
      }),

      ...(filters.category && {
        category: filters.category,
      }),

      ...(filters.duration && {
        durationDays: filters.duration,
      }),
    },

    include: {
      sessions: {
        orderBy: { startDate: "asc" },
      },
    },

    skip: (page - 1) * limit,
    take: limit,
  });

  return courses;
}

export async function getCoursesCount(filters: CourseFilters = {}) {
  return prisma.course.count({
    where: {
      ...(filters.name && {
        title: { contains: filters.name },
      }),
      ...(filters.category && {
        category: filters.category,
      }),
      ...(filters.duration && {
        durationDays: filters.duration,
      }),
    },
  });
}