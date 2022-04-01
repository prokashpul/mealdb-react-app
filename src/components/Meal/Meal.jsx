import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory } =
    props.Mealitem;
  return (
    <div onClick={() => props.handelFood(idMeal)} className="meal">
      <img src={strMealThumb} alt="" />
      <div className="meal-body">
        <h2>{strMeal ? strMeal : "Food"}</h2>
        <h4>
          <span>Category:</span> {strCategory ? strCategory : "no"}
        </h4>
        <p>{strInstructions.slice(0, 50)}</p>
      </div>
    </div>
  );
};

export default Meal;
