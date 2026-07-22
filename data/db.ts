import languages from './languages.json';
import roles from './roles.json';
import categories from './categories.json';
import employees from './employees.json';
import courses from './courses.json';

export type Language = { id: string; name: string };
export type Role = { id: string; name: string };
export type Category = { id: string; name: string; slug: string; description: string | null; image: string | null };
export type Employee = { id: string; name: string; surname: string; image: string; languages: Language[]; roles: Role[] };
export type CourseSession = { id: string; startDate: Date; endDate: Date | null };
export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  categoryId: string;
  category: Category;
  certificateDuration: number;
  price: number;
  durationDays: number | null;
  examDays: number | null;
  employees: Employee[];
  sessions: CourseSession[];
  location?: string | null;
  time?: string | null;
  requirements?: string | null;
};

function resolveEmployee(emp: (typeof employees)[0]): Employee {
  return {
    ...emp,
    languages: emp.languages.map((langId) => languages.find((l) => l.id === langId)!).filter(Boolean),
    roles: emp.roles.map((roleId) => roles.find((r) => r.id === roleId)!).filter(Boolean),
  };
}

function resolveCourse(course: (typeof courses)[0]): Course {
  const category = categories.find((c) => c.id === course.categoryId)!;
  return {
    ...course,
    category,
    employees: course.employees.map((empId) => resolveEmployee(employees.find((e) => e.id === empId)!)).filter(Boolean),
    sessions: course.sessions.map((s) => ({ id: s.id, startDate: new Date(s.startDate), endDate: null })),
  };
}

export function getAllCourses(): Course[] {
  return courses.map(resolveCourse);
}

export function getCourseBySlug(slug: string): Course | undefined {
  const course = courses.find((c) => c.slug === slug);
  return course ? resolveCourse(course) : undefined;
}

export function getCourseById(id: string): Course | undefined {
  const course = courses.find((c) => c.id === id);
  return course ? resolveCourse(course) : undefined;
}

export function getCoursesByCategory(categorySlug: string): Course[] {
  return courses
    .filter((c) => {
      const cat = categories.find((ca) => ca.id === c.categoryId);
      return cat?.slug === categorySlug;
    })
    .map(resolveCourse);
}

export function getUpcomingCourses(): Course[] {
  const now = new Date();
  return courses
    .filter((c) => c.sessions.some((s) => new Date(s.startDate) >= now))
    .map(resolveCourse)
    .sort((a, b) => a.sessions[0]?.startDate.getTime() - b.sessions[0]?.startDate.getTime());
}

export function getCategoryBySlug(slug: string): (Category & { courses: Course[] }) | undefined {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return undefined;
  return {
    ...cat,
    courses: courses
      .filter((c) => c.categoryId === cat.id)
      .map(resolveCourse)
      .sort((a, b) => (b.id > a.id ? -1 : 1)),
  };
}

export function getOtherCategories() {
  return categories.map((cat) => ({
    ...cat,
    _count: { courses: courses.filter((c) => c.categoryId === cat.id).length },
  }));
}
