import { getPageInfo } from '@/services/datasource/page/getPage';
import { TYPE_RECIPE } from '@/shared/consts/type-recipe.consts';

const { getRecipe } = require('@/services/datasource/recipes/getRecipe');

export async function getRecipeInfoRepository(id) {
  const recipe = await getRecipe(id);
  const metadata = await getPageInfo(id);

  const info = {
    title: metadata.properties.Name.title[0]?.text.content,
    cover: metadata.cover.file.url,
    difficulty: metadata.properties.Dificultad.select.name,
    time: {
      cooking: metadata.properties.Tiempo_coccion.number,
      elaborate: metadata.properties.Tiempo_elaboracion.number
    },
    categories: metadata.properties.Select.multi_select.map((tag) => {
      return {
        id: tag.id,
        name: tag.name
      }
    }),
    author: {
      name: metadata.properties.Person.people[0].name,
      avatar: metadata.properties.Person.people[0].avatar_url
    },
    ingredients: [],
    steps: []
  };

  for (const block of recipe) {
    switch (block.type) {
      case TYPE_RECIPE.steps:
        info.steps.push({
          type: 'text',
          content: block.numbered_list_item.rich_text[0]?.text.content
        });
        break;

      case TYPE_RECIPE.images:
        info.steps.push({
          type: 'image',
          content: block.image.file.url
        });
        break;

      case TYPE_RECIPE.ingredients:
        const ingredient = block.bulleted_list_item.rich_text[0]?.text.content;
        const ingredientSplit = ingredient.replace(/\u00A0/, " ").split(" ");

        info.ingredients.push({
          type: 'text',
          content: ingredientSplit.slice(0, -1).join(" "),
          quantity: ingredientSplit[ingredientSplit.length - 1],
        });
        break;
    }
  }

  return info;
}
