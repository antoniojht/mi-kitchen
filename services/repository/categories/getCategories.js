import { getAllCategories } from '@/services/datasource/categories/getAllCategories';

export async function getCategories(limit = 100) {
  const categories = await getAllCategories(limit);

  return categories.map(category => {
    return {
      id: category.id,
      name: category.name,
      color: category.color
    }
  })

}