import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <div className="card-columns">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          name={recipe.name}
          image={recipe.image}
          link={recipe.link}
        />
      ))}
    </div>
  );
};

export default Recipes;
