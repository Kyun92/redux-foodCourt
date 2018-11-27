import React from 'react';
import FoodItem from './FoodItem';

const FoodItemList = ({ foodList, onClick }) => {
  const itemList = foodList.map(item => (
    <FoodItem item={item} key={item.name} onClick={onClick} />
  ));
  return <div>{itemList}</div>;
};

export default FoodItemList;
