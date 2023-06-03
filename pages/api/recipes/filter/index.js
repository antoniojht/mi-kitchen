import { getRecipesFilter } from '@/services/repository/recipe/getRecipesFiltered';

export default async function handler(req, res) {
  const recipes = await getRecipesFilter(req.body);

  res.status(200).json(recipes);
}
