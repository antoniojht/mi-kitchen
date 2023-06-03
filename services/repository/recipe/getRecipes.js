const { getAllRecipes } = require('@/services/datasource/recipes/getAllRecipes');

export async function getRecipes(limit) {
  const recipes = await getAllRecipes(limit);

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