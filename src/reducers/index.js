import {combineReducers} from 'redux';
import card from './cardReducer';
import allcard from './allcardReducer';
import planet from './planetReducer';

const rootReducer = combineReducers({
  // short hand property names
  card,
  planet,
  allcard
})

export default rootReducer;