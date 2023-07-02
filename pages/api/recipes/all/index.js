import { getRecipesRepository } from '@/services/repository/recipe/getRecipesRepository';

export default async function handler(req, res) {
  const recipes = await getRecipesRepository();

  res.status(200).json(recipes);
}
