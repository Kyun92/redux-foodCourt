import React from 'react';
import './FoodItem.css';

const FoodItem = ({ item, onClick }) => (
  <div className="FoodItem" onClick={() => onClick(item)}>
    <h4>{item.name}</h4>
    <div>{item.price}원</div>
  </div>
);

export default FoodItem;
