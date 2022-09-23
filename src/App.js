import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("apple");
  const [recipes, setRecipes] = useState([]);

  const APP_KEY = "447a3a29da8241c698687ad501a5ce77";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      ` https://api.spoonacular.com/food/search?query=${search}&apiKey=${APP_KEY}&number=6`
    );

    setRecipes(res.data.searchResults[0].results);
    console.log(res);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
