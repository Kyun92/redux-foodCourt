import React from 'react';
import './FoodItem.css';

const FoodItem = ({ name, price }) => (
  <div className="FoodItem">
    <h4>{name}</h4>
    <div>{price}원</div>
  </div>
);

export default FoodItem;
