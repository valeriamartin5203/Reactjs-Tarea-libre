import { useState } from "react";
import "./App.css";

import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

import { searchRecipes, getRecipeDetails, translateIngredient } from "./services/api";

import type { Recipe } from "./types/recipe";
import type { RecipeDetail as RecipeDetailType } from "./types/recipeDetail";

function App() {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetailType | null>(null);

  const addIngredient = async (ingredient: string) => {
    const newIngredients = [...ingredients, ingredient];
    setIngredients(newIngredients);
    
    // Traducir el ingrediente de español a inglés
    const translatedIngredient = await translateIngredient(ingredient);
    
    // Buscar automáticamente con el ingrediente traducido
    const result = await searchRecipes(translatedIngredient);
    setRecipes(result);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSearch = async () => {

    if (ingredients.length === 0) return;

    const translatedIngredient = await translateIngredient(ingredients[0]);
    const result = await searchRecipes(translatedIngredient);
    setRecipes(result);
  };

  const handleSelectRecipe = async (id: string) => {

    const detail = await getRecipeDetails(id);
    setSelectedRecipe(detail);
  };

  return (
    <div className="container">

      <h1>Buscador de recetas</h1>

      <IngredientInput addIngredient={addIngredient} />

      <h3>Ingredientes:</h3>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>
            {ing}
            <button onClick={() => removeIngredient(index)} style={{ marginLeft: '10px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 8px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleSearch}>
        Buscar recetas
      </button>

      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} />
      )}

      <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />

    </div>
  );
}

export default App;