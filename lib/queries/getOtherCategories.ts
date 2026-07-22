import { getOtherCategories as _getOtherCategories } from '@/data/db';

export async function getOtherCategories() {
  return _getOtherCategories();
}
