import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  let foodItems = ["Noodles", "Salad", "Milk", "Veggies", "Pancakes"];
  //let foodItems =[];
  return (
    // <React.Fragment> or <>...</> can be used
    // <>
    //   <h1>Healthy Food</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Green Vegetables</li>
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Milk</li>
    //   </ul>
    // {/* // </React.Fragment> */}
    // </>
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
