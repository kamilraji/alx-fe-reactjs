import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {data.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg mb-3"
            />
            <h2 className="text-xl font-bold">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;

