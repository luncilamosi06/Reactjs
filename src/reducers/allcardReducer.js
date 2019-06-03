import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function allcardReducer(state = initialState.allcard, action) {
  switch(action.type) {
    case types.LOAD_ALLPEOPLE_SUCCESS:
     return action.allcard
     
    default: 
      return state;
  }
}