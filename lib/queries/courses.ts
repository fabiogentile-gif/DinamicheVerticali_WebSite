import { prisma } from "@/lib/db/prisma";


export async function getCourses() {
  const courses = await prisma.course.findMany({
    include: {
      sessions: {
        orderBy: {
          startDate: "asc"
        }
      }
    }
  });

  return courses;
}