import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const INSERT = 'basket/INSERT';
const INCREMENT = 'basket/INCREMENT';
const DECREMENT = 'basket/DECREMENT';
const REMOVE = 'basket/REMOVE';

export const insert = createAction(INSERT, food => food);
export const increment = createAction(INCREMENT, id => id);
export const decrement = createAction(DECREMENT, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  list: [],
};

export default handleActions(
  {
    [INSERT]: (state, action) => produce(state, (draft) => {
      draft.list.push({
        id: action.payload.name,
        name: action.payload.name,
        price: action.payload.price,
        count: 1,
      });
    }),
    [INCREMENT]: (state, action) => produce(state, (draft) => {
      const selectedItem = draft.list.find(
        item => item.id === action.payload,
      );
      selectedItem.count += 1;
    }),
    [DECREMENT]: (state, action) => produce(state, (draft) => {
      const selectedItem = draft.list.find(
        item => item.id === action.payload,
      );
      selectedItem.count -= 1;
    }),
    [REMOVE]: (state, action) => produce(state, (draft) => {
      draft.list.splice(
        draft.list.findIndex(item => item.id === action.payload),
        1,
      );
    }),
  },
  initialState,
);
