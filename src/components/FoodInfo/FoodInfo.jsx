import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodInfo.css";
const FoodInfo = () => {
  const { food } = useParams();
  const [foodDetails, setFoodDetails] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`)
      .then((res) => res.json())
      .then((data) => setFoodDetails(data));
  }, [food]);

  // console.log(foodDetails?.meals);
  let singleFood;
  for (const fd in foodDetails) {
    singleFood = foodDetails[fd][0];
  }
  console.log(singleFood);

  return (
    <div className="food-info main">
      <img src={singleFood?.strMealThumb} alt="" />
      <div className="body">
        <h2>{singleFood?.strMeal}</h2>
        <h4>Area: {singleFood?.strArea}</h4>
        <h4>Category: {singleFood?.strCategory}</h4>
        <h4> Tags: {singleFood?.strTags}</h4>
        <p> {singleFood?.strInstructions}</p>
      </div>
    </div>
  );
};

export default FoodInfo;
