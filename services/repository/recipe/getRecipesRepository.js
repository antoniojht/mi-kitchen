const { getAllRecipes } = require('@/services/datasource/recipes/getAllRecipes');

export async function getRecipesRepository(limit = 7) {
  const recipes = await getAllRecipes(limit);

  return recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.properties.Name.title[0].text.content,
    image: recipe.cover.file.url,
    dificulty: recipe.properties.Dificultad.select.name,
    totalTime: recipe.properties.Tiempo_total.number,
  }));
}
