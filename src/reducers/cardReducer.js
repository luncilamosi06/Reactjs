import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function cardReducer(state = initialState.card, action) {
  switch(action.type) {
    case types.LOAD_PEOPLE_SUCCESS:
     return action.card
     
    default: 
      return state;
  }
}