import { getCategories } from '@/services/repository/categories/getCategories'
import Link from 'next/link';

export default async function Categories() {
  const categories = await getCategories();

  return (
    <>
      <h1 className="text-3xl font-bold">Categorias</h1>
      <div className="mt-9 grid">
        {categories.map((category) => {
          return (
            <Link
              className="inline text-center mb-4 -z-10"
              href={`categories/${category.name}`}
              key={category.id}
            >
              <div
                className={`rounded-lg drop-shadow-md ${category.color} p-16 w-[208] flex justify-center`}
              >
                <span className='capitalize'>{category.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}