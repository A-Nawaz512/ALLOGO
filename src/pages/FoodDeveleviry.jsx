import React from "react";
import Header from "../components/fooddelivery/Header";
import FoodMenu from "../components/fooddelivery/FoodMenu";

function FoodDelivery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <FoodMenu />
    </div>
  );
}

export default FoodDelivery;
