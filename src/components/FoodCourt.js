import React from "react";
import FoodCourtTemplate from "./FoodCourtTemplate";
import FoodItemListContainer from "../container/FoodItemListContainer";
import BasketItemListContainer from "../container/BasketItemListContainer";

const FoodCourt = () => (
  <FoodCourtTemplate
    items={<FoodItemListContainer />}
    basket={<BasketItemListContainer />}
  />
);

export default FoodCourt;
