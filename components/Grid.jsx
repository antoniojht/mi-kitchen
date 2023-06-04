import Card from './Card';

export default function Grid({ recipes }) {
  return (
    <div className="grid">
      {
        recipes.map((recipe) =>
          <Card
            key={recipe.id}
            title={recipe.title}
            src={recipe.image}
            slug={`/recipes/${recipe.id}`}
            difficult={recipe.dificulty}
            totalTime={recipe.totalTime}
          />)
      }
    </div>
  )
};
