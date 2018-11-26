import React from 'react';
import FoodItem from './FoodItem';

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

const FoodItemList = () => {
  const itemList = items.map(item => <FoodItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default FoodItemList;
