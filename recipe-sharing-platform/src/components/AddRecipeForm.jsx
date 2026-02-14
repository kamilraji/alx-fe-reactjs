import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title) {
      newErrors.title = "Title is required";
    }

    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      if (ingredientList.length < 2) {
        newErrors.ingredients = "At least two ingredients required";
      }
    }

    if (!preparation) {
      newErrors.preparation = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({
        title,
        ingredients,
        preparation,
      });

      setTitle("");
      setIngredients("");
      setPreparation("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">
              {errors.ingredients}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Preparation Steps
          </label>
          <textarea
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
          />
          {errors.preparation && (
            <p className="text-red-500 text-sm">
              {errors.preparation}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

