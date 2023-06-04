import { searchRecipeRepository } from '@/services/repository/recipe/searchRecipeRepository';

export default async function handler(req, res) {
  const { query = {} } = req;
  const { q = "" } = query;

  const recipes = await searchRecipeRepository(q);

  res.status(200).json(recipes);
}
