import { searchRecipeDataSource } from '@/services/datasource/recipes/searchRecipe';

export async function searchRecipeRepository(query) {
  const recipes = await searchRecipeDataSource(query);

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