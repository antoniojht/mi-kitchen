import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import Grid from '@/components/Grid';
import '../styles/globals.css';

export const metadata = {
  title: 'miKitchen Blog',
  description: 'Blog sobre recetas de cocina, consejos, y otros temas relacionados con este mundo.',
  keywords: 'recetas de cocina, cocina casera, postres, comida saludable',
  author: 'Antonio José Herrera Tabaco',
  openGraph: {
    title: 'miKitchen Blog',
    description: 'Blog sobre recetas de cocina, consejos, y otros temas relacionados con este mundo.',
  },
};

async function getRecipes() {
  const host = headers().get('host');
  const recipes = await fetch(`http://${host}/api/recipes/all`, { next: { revalidate: 10000 } });

  return recipes.json();
}

export default async function Home() {
  const recipes = await getRecipes(7);
  const mainRecipe = recipes.shift();

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Bienvenido a miKitchen!</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 mt-5 welcome-gradient text-center">
          Échale un vistazo a nuestra última receta
        </h2>
        <article className="flex flex-col items-center">
          <Link
            href={`/recipes/${mainRecipe.id}`}
          >
            <Image
              src={`${mainRecipe.image}`}
              width="0"
              height="0"
              className="w-full max-w-2xl object-cover"
              sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
              alt="Cover image showing latest recipe from blog"
              priority
            />
            <div>
              <p className="text-2xl font-bold mb-4">{`${mainRecipe.title}`}</p>
              <p>
                Dificultad:
                {' '}
                {`${mainRecipe.dificulty}`}
              </p>
              <p>
                Tiempo:
                {' '}
                {`${mainRecipe.totalTime}`}
              </p>
            </div>
          </Link>
        </article>
      </section>
      <section>
        <article>
          <h2 className="text-3xl font-bold mb-4 mt-5 welcome-gradient">Recetas más visitadas</h2>
          <Grid recipes={recipes} />
        </article>
      </section>
    </>
  );
}
