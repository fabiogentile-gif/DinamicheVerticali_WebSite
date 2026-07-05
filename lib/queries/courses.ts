import { prisma } from "@/lib/db/prisma"

export type CourseFilters = {
  name?: string
  category?: string
  duration?: number
}

export async function getCourses(filters: CourseFilters = {}) {
  return prisma.course.findMany({
    where: {
      ...(filters.name && {
        name: {
          contains: filters.name,
          mode: "insensitive",
        },
      }),

      ...(filters.category && {
        category: filters.category,
      }),

      ...(filters.duration && {
        duration: filters.duration,
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}