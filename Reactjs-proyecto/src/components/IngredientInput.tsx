import { useState } from "react";

interface Props {
  addIngredient: (ingredient: string) => void;
}

function IngredientInput({ addIngredient }: Props) {

  const [ingredient, setIngredient] = useState("");

  const handleAdd = () => {

    if (ingredient.trim() === "") return;

    addIngredient(ingredient);
    setIngredient("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Escribe un ingrediente"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button onClick={handleAdd}>
        Agregar
      </button>

    </div>
  );
}

export default IngredientInput;