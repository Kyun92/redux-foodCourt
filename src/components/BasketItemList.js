import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = ({ basket }) => {
  const itemList = basket.map(item => (
    <BasketItem
      key={item.name}
      name={item.name}
      price={item.price}
      count={item.count}
    />
  ));
  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> 5000원
      </p>
    </div>
  );
};

export default BasketItemList;
