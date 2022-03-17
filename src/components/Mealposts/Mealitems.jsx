import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Mealitems.css";

const Mealitems = () => {
  const [meals, setState] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data.meals));
  }, []);
  console.log(meals);
  return (
    <div className="mealitems">
      {meals.map((meal) => (
        <Meal Mealitem={meal} key={meal.idMeal}></Meal>
      ))}
    </div>
  );
};

export default Mealitems;
