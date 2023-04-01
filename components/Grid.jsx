import Card from './Card';
import style from '../styles/Grid.module.css';

export default function Grid({ recipes }) {
  return (
    <div className={style.grid}>
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
