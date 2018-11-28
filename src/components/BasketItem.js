import React from "react";
import "./BasketItem.css";

const BasketItem = ({
  name,
  price,
  count,
  onIncrement,
  onDecrement,
  onRemove
}) => (
  <div className="BasketItem">
    <div className="name">{name}</div>
    <div className="price">{price}원</div>
    <div className="count">
      <button type="button" onClick={() => onIncrement(name)}>
        +
      </button>
      {count}
      <button type="button" onClick={() => onDecrement(name)}>
        -
      </button>
    </div>
    <div className="return" onClick={() => onRemove(name)}>
      갖다놓기
    </div>
  </div>
);

export default BasketItem;
