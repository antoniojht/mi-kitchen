import Grid from '@/components/Grid';
import { getRecipesByCategoryRepository } from '@/services/repository/recipe/getRecipesByCategoryRepository';
import { getCategoriesRepository } from '@/services/repository/categories/getCategoriesRepository';

export default async function Recipes({ params }) {
  const recipes = await getRecipesByCategoryRepository(params.slug);

  return (
    <>
      <h1 className="text-3xl font-bold mb-9">Recetas de <span className='welcome-gradient'>{params.slug}</span></h1>
      <Grid recipes={recipes} />
    </>
  );
}

export async function generateStaticParams() {
  const categories = await getCategoriesRepository();

  return categories.map((category) => {
    return {
      slug: category.name
    }
  })
}
