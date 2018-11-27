import { combineReducers } from 'redux';
import basket from './basket';
import food from './food';

export default combineReducers({
  basket,
  food,
});
