import Image from 'next/image';
import { getRecipeInfoRepository } from '@/services/repository/recipe/getRecipeRepository';

export default async function Recipe({ params }) {
  const { id } = params;

  const recipeInfo = await getRecipeInfoRepository(id)

  return (
    <article>
      <h1 className="text-5xl font-bold text-center mb-9">{recipeInfo.title}</h1>
      <div className='w-full relative pt-[100%]'>
        <Image
          src={recipeInfo.cover}
          alt={`Image for ${recipeInfo.time}`}
          fill
          className="w-full h-[60%] top-0 left-0 object-cover rounded-2xl -z-10"
          priority={true}
        />
      </div>
      <div className="mt-2">
        <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          <p>&bull; Cocción:{recipeInfo.time.cooking} minutos </p>
          <p>&bull; Preparación:{recipeInfo.time.elaborate} minutos</p>
          <p>&bull; Dificultad: {recipeInfo.difficulty}</p>
        </div>
      </div>
      <section>
        <h2 className="text-3xl font-bold mb-9 mt-9">Ingredientes</h2>
        <ul>
          {
            recipeInfo.ingredients.map((ingredient) => {
              return (
                <li>
                  {ingredient.content} - {ingredient.quantity}
                </li>
              )
            })
          }
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-9 mt-9">Preparación</h2>
        <ol className='pl-4'>
          {
            recipeInfo.steps.map((step) => {
              return (
                // TODO: Change img to Image component
                <li className={`mb-3 ${step.type === 'text' ? 'list-decimal' : null}`}>
                  {step.type === 'image' ? <img src={step.content} /> : step.content}
                </li>
              )
            })
          }
        </ol>
      </section>
    </article>
  )
}