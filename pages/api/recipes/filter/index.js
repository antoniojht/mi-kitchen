import { getRecipesFilterRepository } from '@/services/repository/recipe/getRecipesFilteredRepository';

export default async function handler(req, res) {
  const recipes = await getRecipesFilterRepository(req.body);

  res.status(200).json(recipes);
}
