import React from "react";
import BasketItem from "./BasketItem";

const BasketItemList = ({
  basket,
  total,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  const itemList = basket.map(item => (
    <BasketItem
      key={item.name}
      name={item.name}
      price={item.price}
      count={item.count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onRemove={onRemove}
    />
  ));
  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b>
        {total}원
      </p>
    </div>
  );
};

export default BasketItemList;
