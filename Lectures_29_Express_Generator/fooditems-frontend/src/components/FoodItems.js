import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FoodItems() {
  const [foodItems, updateFoodItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://evening-forest-95428.herokuapp.com/foodItems/list")
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        updateFoodItems(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  function renderFoodItems() {
    return foodItems.map((foodItem) => {
      return (
        <div className="border w-80 flex items-center justify-center flex-col">
          <div>
            <img
              className={"w-60 h-40"}
              src={foodItem.image}
              alt="ice creams"
            />
          </div>
          <div>
            <span className="font-bold">Food item:</span>
            <span className="capitalize">{foodItem.name}</span>
          </div>
          <div>
            <span className="font-bold">Price:</span>
            <span> {foodItem.price}</span>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="flex justify-center items-center w-screen m-10">
      {renderFoodItems()}
    </div>
  );
}
