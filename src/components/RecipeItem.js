import React from "react";

const RecipeItem = (props) => {
  const { name, image, link } = props;

  return (
    <div className="card py-2 text-center">
      <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
      <div className="card-body">
        <h5>{name}</h5>
      </div>
      <p>All Nutritional Facts And Detailed Recipe</p>
      <a href={`${link}`}>click here </a>
    </div>
  );
};

export default RecipeItem;
