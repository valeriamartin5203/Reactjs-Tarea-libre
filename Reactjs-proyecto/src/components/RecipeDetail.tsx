import { useEffect, useState } from "react";
import type { RecipeDetail as RecipeDetailType } from "../types/recipeDetail";

interface Props {
  recipe: RecipeDetailType;
}

function RecipeDetail({ recipe }: Props) {

  const [instructionsES, setInstructionsES] = useState("");
  const [ingredientsES, setIngredientsES] = useState<string[]>([]);

  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {

    const ing = recipe[`strIngredient${i}` as keyof RecipeDetailType];
    const measure = recipe[`strMeasure${i}` as keyof RecipeDetailType];

    if (ing && ing !== "") {
      ingredients.push(`${measure} ${ing}`);
    }
  }

  useEffect(() => {

    const translate = async () => {

      // traducir instrucciones
      const text = encodeURIComponent(recipe.strInstructions);

      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${text}`
      );

      const data = await res.json();

      setInstructionsES(data[0].map((item: any) => item[0]).join(""));

      // traducir ingredientes
      const translatedIngredients = await Promise.all(
        ingredients.map(async (item) => {

          const textIng = encodeURIComponent(item);

          const resIng = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${textIng}`
          );

          const dataIng = await resIng.json();

          return dataIng[0].map((t: any) => t[0]).join("");
        })
      );

      setIngredientsES(translatedIngredients);
    };

    translate();

  }, [recipe]);

  return (
    <div className="detail">

      <h2>{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={300}
      />

      <h3>Ingredientes</h3>

      <ul>
        {ingredientsES.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Pasos</h3>

      <ol>
        {instructionsES.split("\n").map((step, index) =>
          step.trim() !== "" && (
            <li key={index}>{step}</li>
          )
        )}
      </ol>

    </div>
  );
}

export default RecipeDetail;