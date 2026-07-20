import { prisma } from '@/lib/db/prisma';

export async function getOtherCategories() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          courses: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return categories;
}
