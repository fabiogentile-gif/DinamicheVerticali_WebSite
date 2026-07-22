import { getCategoryBySlug as _getCategoryBySlug } from '@/data/db';

export async function getCategoryBySlug(slug: string) {
  return _getCategoryBySlug(slug);
}
