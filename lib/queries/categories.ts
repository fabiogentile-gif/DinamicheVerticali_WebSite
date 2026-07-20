import { prisma } from "@/lib/db/prisma";

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: {
      slug,
    },
    include: {
      courses: {
        include: {
          category: true,
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
      },
    },
  });
}