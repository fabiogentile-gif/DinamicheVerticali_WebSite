import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const courses = await prisma.course.findMany({
    include: {
      sessions: true,
    },
  });

  return Response.json(courses);
}