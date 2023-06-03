import { getAllCategories } from '@/services/datasource/categories/getAllCategories';

export default async function handler(req, res) {
  const categories = await getAllCategories();

  res.status(200).json(categories);
}
