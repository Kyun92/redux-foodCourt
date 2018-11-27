import { handleActions } from 'redux-actions';

const initialState = {
  foodList: [
    {
      name: '김밥',
      price: 2000,
    },
    {
      name: '라면',
      price: 3000,
    },
    {
      name: '치즈라면',
      price: 3500,
    },
    {
      name: '떡볶이',
      price: 2500,
    },
    {
      name: '치즈떡볶이',
      price: 3000,
    },
  ],
};

export default handleActions({}, initialState);
