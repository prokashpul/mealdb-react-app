import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strMealThumb, strInstructions, strAre } = props.Mealitem;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="meal-body">
        <h3>{strMeal ? strMeal : "Food"}</h3>
        <h4>{strAre ? strAre : "no"}</h4>
        <p>{strInstructions.slice(0, 50)}</p>
      </div>
    </div>
  );
};

export default Meal;
