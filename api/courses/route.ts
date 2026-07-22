import { getAllCourses } from '@/data/db';

export async function GET() {
  const courses = getAllCourses();
  return Response.json(courses);
}
