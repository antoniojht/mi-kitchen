import Image from 'next/image';
import { getRecipes } from '@/services/getRecipes';

export const metadata = {
  title: 'miKitchen Blog',
};

export default async function Home() {
  const recipes = await getRecipes(7);
  const mainRecipe = recipes[0];

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Bienvenido a miKitchen!</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4">
          Échale un vistazo a nuestra última receta
        </h2>
        <article>
          <Image
            src={`${mainRecipe.image}`}
            width="0"
            height="0"
            className="w-full h-auto"
            sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
            alt="Cover image showing latest recipe from blog"
            priority={true}
          />
          <div>
            <p className="text-2xl font-bold mb-4">{`${mainRecipe.title}`}</p>
            <p>
              Dificultad: {`${mainRecipe.dificulty}`}
            </p>
            <p>
              Tiempo: {`${mainRecipe.totalTime}`}
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
