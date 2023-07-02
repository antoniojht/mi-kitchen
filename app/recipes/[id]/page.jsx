import Image from 'next/image';
import { getRecipeInfoRepository } from '@/services/repository/recipe/getRecipeRepository';

export async function generateMetadata({ params }) {
  const { id } = params;

  const recipe = await getRecipeInfoRepository(id);

  return {
    title: recipe.title,
    description: `Receta detallada paso a paso con ingredientes y cantidades de ${recipe.title}`,
    openGraph: {
      images: [recipe.cover],
    },
  };
}

export default async function Recipe({ params }) {
  const { id } = params;

  const recipeInfo = await getRecipeInfoRepository(id);

  return (
    <article>
      <h1 className="text-5xl font-bold text-center mb-9">{recipeInfo.title}</h1>
      <div className="w-full relative flex justify-center">
        <Image
          src={recipeInfo.cover}
          alt={`Image for ${recipeInfo.time}`}
          sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
          width="0"
          height="0"
          className="w-full max-w-4xl object-cover"
          priority
        />
      </div>
      <section className="mt-2 flex flex-col items-center">
        <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          <p>
            &bull; Cocción:
            {recipeInfo.time.cooking}
            {' '}
            minutos
            {' '}
          </p>
          <p>
            &bull; Preparación:
            {recipeInfo.time.elaborate}
            {' '}
            minutos
          </p>
          <p>
            &bull; Dificultad:
            {' '}
            {recipeInfo.difficulty}
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-9 mt-9">Ingredientes</h2>
        <ul>
          {
            recipeInfo.ingredients.map((ingredient) => (
              <li>
                {ingredient.content}
                {' '}
                -
                {ingredient.quantity}
              </li>
            ))
          }
        </ul>
        <h2 className="text-3xl font-bold mb-9 mt-9">Preparación</h2>
        <ol className="pl-4 max-w-[720px]">
          {
            recipeInfo.steps.map((step) => (
              // TODO: Change img to Image component
              <li className={`mb-3 ${step.type === 'text' ? 'list-decimal' : 'flex justify-center'}`}>
                {/* {step.type === 'image' ? <img src={step.content} /> : step.content} */}
                {step.type === 'image' ? (
                  <Image
                    src={`${step.content}`}
                    width="300"
                    height="300"
                    className="w-full max-w-2xl object-cover"
                    alt="Cover image showing the actual step who describe the result of previous step"
                    priority
                  />
                ) : step.content}
              </li>
            ))
          }
        </ol>
      </section>
    </article>
  );
}
