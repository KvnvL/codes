import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import RecipesPageCard from "../components/RecipesPageCard";
import Searchbar from "../components/Searchbar";

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const data = collection(db, "Recepten");
    const unsub = onSnapshot(data, (querySnapshot) => {
      let recipeArray = [];
      querySnapshot.forEach((doc) => {
        recipeArray.push({ ...doc.data(), id: doc.id });
      });
      setRecipe(recipeArray.sort((a, b) => a.newName > b.newName));
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <Searchbar search="recept" />
      <div id="recipeWrapper">
        {recipe.map((recipe) => {
          return (
            <div className="Recipes" key={recipe.id}>
              {" "}
              <Link
                to={{
                  pathname: recipe.link,
                  state: {
                    banner: recipe.banner,
                    name: recipe.naam,
                    persons: recipe.personen,
                    cal: recipe.calorieën,
                    time: recipe.bereidingstijd,
                    category: recipe.categorie,
                    preparation: recipe.bereiding,
                    ingredients: recipe.ingrediënten,
                  },
                }}
              >
                <RecipesPageCard
                  image={recipe.img}
                  name={recipe.naam}
                  persons={recipe.personen}
                  cal={recipe.calorieën}
                  time={recipe.bereidingstijd}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
