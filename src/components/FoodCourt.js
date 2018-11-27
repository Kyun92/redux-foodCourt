import React from 'react';
import FoodCourtTemplate from './FoodCourtTemplate';

import BasketItemList from './BasketItemList';
import FoodItemListContainer from '../container/FoodItemListContainer';

const FoodCourt = () => (
  <FoodCourtTemplate
    items={<FoodItemListContainer />}
    basket={<BasketItemList />}
  />
);

export default FoodCourt;
