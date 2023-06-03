import Image from 'next/image';
import { getRecipeInfo } from '@/services/getRecipe';

export default async function Recipe({ params }) {
  const { id } = params;

  const recipeInfo = await getRecipeInfo(id)

  return (
    <>
      <h1 className="text-5xl font-bold text-center">{recipeInfo.title}</h1>
      <div className='relative w-full h-full'>
        <Image
          src={recipeInfo.cover}
          alt={`Image for ${recipeInfo.time}`}
          className="object-center object-cover w-full rounded-lg"
          fill={true}
          sizes="min-width: 66em) 33vw,
        (min-width: 44em) 50vw,
        100vw"
          priority={true}
        />
      </div>

    </>
  )
}