import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function planetReducer(state = initialState.planet, action) {
  switch(action.type) {
     case types.LOAD_PLANETS_SUCCESS:
     return action.planet
     
    default: 
      return state;
  }
}