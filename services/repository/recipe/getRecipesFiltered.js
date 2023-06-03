import { filterRecipes } from '@/services/datasource/recipes/getFilterRecipes';

export async function getRecipesFilter(body) {
  const recipes = await filterRecipes(body);

  return recipes.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.properties.Name.title[0].text.content,
      image: recipe.cover.file.url,
      dificulty: recipe.properties.Dificultad.select.name,
      totalTime: recipe.properties.Tiempo_total.number
    }
  })
}