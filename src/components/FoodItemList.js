import React from 'react';
import FoodItem from './FoodItem';

const items = [
  {
    name: '김밥',
    price: 2000,
  },
  {
    name: '라면',
    price: 3000,
  },
  {
    name: '치즈라면',
    price: 3500,
  },
  {
    name: '떡볶이',
    price: 2500,
  },
];

const FoodItemList = () => {
  const itemList = items.map(item => <FoodItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default FoodItemList;
