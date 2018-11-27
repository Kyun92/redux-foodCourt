import React from 'react';
import './BasketItem.css';

const BasketItem = ({ name, price, count }) => (
  <div className="BasketItem">
    <div className="name">{name}</div>
    <div className="price">{price}원</div>
    <div className="count">
      <button type="button">+</button>
      {count}
      <button type="button">-</button>
    </div>
    <div className="return">갖다놓기</div>
  </div>
);

export default BasketItem;
