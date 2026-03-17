import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import { useCoffee } from "../contexts/coffeeContext";
import RecipeCard from "../components/RecipeCard";

import { Link } from "react-router-dom";
function Favorites() {
  const { coffee } = useCoffee();
  const { favorites } = useFavorites();
  const favoriteCoffee = coffee.filter((c) =>
    favorites.includes(c.id),
  );
  return (
    <>
      {favoriteCoffee.length > 0 ? (
        <RecipeCard recipes={favoriteCoffee} />
      ) : (
        <div className="flex justify-center items-center w-screen h-screen flex-col">
          <p>No Favories</p>
          <Link
            to="/"
            className="text-white text-sm p-2 rounded-lg bg-green-400 "
          >
            Home
          </Link>
        </div>
      )}
    </>
  );
}

export default Favorites;
