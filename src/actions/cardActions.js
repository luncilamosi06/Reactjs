import * as types from './actionTypes';
import cardApi from '../api/CardApi';

export function loadCardSuccess(card) {
    return {type: types.LOAD_PEOPLE_SUCCESS, card};
}

export function loadAllCardSuccess(allcard) {
  return {type: types.LOAD_ALLPEOPLE_SUCCESS, allcard};
}

export function loadCardPlanetSuccess(planet) {
  return {type: types.LOAD_PLANETS_SUCCESS, planet};
}

export function updateCardSuccess(responseUpdateCard) {
  return {type: types.UPDATE_PEOPLE_SUCCESS, responseUpdateCard};
}


export function loadCard(limit, page, search) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
      return cardApi.getPageCards(limit, page, search).then(card => {
        dispatch(loadCardSuccess(card));
      }).catch(error => {
        throw(error);
      });
    };
}

export function updateCard(cards, id) {
  return function (dispatch) {
    return cardApi.updateCard(cards, id).then(responseUpdateCard => {
      dispatch(updateCardSuccess(responseUpdateCard));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllCard() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return cardApi.getAllCards().then(allcard => {
      dispatch(loadAllCardSuccess(allcard));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPlanet() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return cardApi.getAllPlanets().then(planet => {
      dispatch(loadCardPlanetSuccess(planet));
    }).catch(error => {
      throw(error);
    });
  };
}