import type { Recipe } from "../types/recipe";

interface Props {
  recipes: Recipe[];
  onSelect: (id: string) => void;
}

function RecipeList({ recipes, onSelect }: Props) {

  if (recipes.length === 0) {
    return <p>No hay recetas para mostrar</p>;
  }

  return (
    <div className="recipes-container">

      <h2>Recetas encontradas</h2>

      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="card">

          <h3>{recipe.strMeal}</h3>

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />

          <button onClick={() => onSelect(recipe.idMeal)}>
            Ver receta
          </button>

        </div>
      ))}

    </div>
  );
}

export default RecipeList;