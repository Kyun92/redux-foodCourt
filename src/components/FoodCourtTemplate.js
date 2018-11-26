import React from 'react';
import './FoodCourtTemplate.css';

const FoodCourtTemplate = ({ items, basket }) => (
  <div className="FoodCourtTemplate">
    <div className="items-wrapper">
      <h2>상품</h2>
      {items}
    </div>
    <div className="basket-wrapper">
      <h2>장바구니</h2>
      {basket}
    </div>
  </div>
);

export default FoodCourtTemplate;
