import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => (
  <div>
    <BasketItem name="포카칩" price={1500} count={2} />
    <BasketItem name="생수" price={850} count={1} />
    <hr />
    <p>
      <b>총합: </b> 3850원
    </p>
  </div>
);

export default BasketItemList;
