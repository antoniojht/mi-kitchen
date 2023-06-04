import { getRecipesFilterCategory } from '@/services/datasource/recipes/getRecipesByCategory';

export async function getRecipesByCategory(category) {
  const recipes = await getRecipesFilterCategory(category)

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