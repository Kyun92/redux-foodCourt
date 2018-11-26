import React from 'react';
import FoodCourtTemplate from './FoodCourtTemplate';
import FoodItemList from './FoodItemList';
import BasketItemList from './BasketItemList';

const FoodCourt = () => (
  <FoodCourtTemplate items={<FoodItemList />} basket={<BasketItemList />} />
);

export default FoodCourt;
