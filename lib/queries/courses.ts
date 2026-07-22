import {
  getAllCourses as _getAllCourses,
  getCourseById as _getCourseById,
  getCourseBySlug as _getCourseBySlug,
  getCoursesByCategory as _getCoursesByCategory,
  getUpcomingCourses as _getUpcomingCourses,
} from '@/data/db';

export async function getCourses() {
  return _getAllCourses();
}

export async function getCourseById(id: string) {
  return _getCourseById(id);
}

export async function getCourseBySlug(slug: string) {
  return _getCourseBySlug(slug);
}

export async function getCoursesByCategory(categorySlug: string) {
  return _getCoursesByCategory(categorySlug);
}

export async function getUpcomingCourses() {
  return _getUpcomingCourses();
}
