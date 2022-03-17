import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Mealitems.css";

const Mealitems = () => {
  const [searchText, setSearchText] = useState([]);
  const [meals, setState] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data.meals));
  }, [searchText]);
  console.log(meals);
  // search button
  const clickNow = () => {
    const inputText = document.getElementById("search-input");
    if (inputText.value) {
      setSearchText(inputText.value);
    }
    inputText.value = "";
  };

  const enterPress = (event) => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
    }
  };

  return (
    <div>
      <div className="search-area">
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search"
          onKeyPress={enterPress}
        />
        <button className="search-btn" onClick={clickNow}>
          Search
        </button>
      </div>
      <h3 className="countMeal">Meal Result: {meals.length}</h3>
      <div className="mealitems">
        {meals?.map((meal) => (
          <Meal Mealitem={meal} key={meal.idMeal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Mealitems;
