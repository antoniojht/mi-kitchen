import Grid from '@/components/Grid';
import { getRecipesByCategory } from '@/services/repository/recipe/getRecipesByCategoryName';
import { getCategories } from '@/services/repository/categories/getCategories';

export default async function Recipes({ params }) {
  const recipes = await getRecipesByCategory(params.slug);

  return (
    <>
      <h1 className="text-3xl font-bold mb-9">Recetas de <span className='welcome-gradient'>{params.slug}</span></h1>
      <Grid recipes={recipes} />
    </>
  );
}

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => {
    return {
      slug: category.name
    }
  })
}
