import React from 'react';
import FoodItem from './FoodItem';

const FoodItemList = ({ foodList }) => {
  const itemList = foodList.map(item => <FoodItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default FoodItemList;
