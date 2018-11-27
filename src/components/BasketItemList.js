import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => (
  <div>
    <BasketItem name="김밥" price={2000} count={2} />
    <BasketItem name="라면" price={3000} count={1} />
    <hr />
    <p>
      <b>총합: </b> 5000원
    </p>
  </div>
);

export default BasketItemList;
