import type { Recipe } from "../types/recipe";
import type { RecipeDetail } from "../types/recipeDetail";

export const translateIngredient = async (ingredient: string): Promise<string> => {
  try {
    const text = encodeURIComponent(ingredient);
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=${text}`
    );
    const data = await response.json();
    return data[0][0][0] || ingredient;
  } catch (error) {
    console.error("Error translating ingredient:", error);
    return ingredient;
  }
};

export const searchRecipes = async (ingredient: string): Promise<Recipe[]> => {

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
};

export const getRecipeDetails = async (id: string): Promise<RecipeDetail> => {

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const data = await response.json();

  return data.meals[0];
};