import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        Recipe not found
      </div>
    );
  }

  return (
  <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-80 object-cover rounded-xl mb-6"
    />

    <h1 className="text-3xl font-bold mb-4">
      {recipe.title}
    </h1>

    <div className="bg-gray-100 p-5 rounded-lg mb-6 shadow-md">
      <h2 className="text-xl font-semibold mb-3">
        Ingredients
      </h2>
      <ul className="list-disc list-inside space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>

    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">
        Instructions
      </h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  </div>
);

