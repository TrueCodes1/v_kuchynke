// IMPORT REDUX ACTION TYPES
import { MY_PROFILE } from "../../actionsTypes/actionsTypes";

// actions creators
const division = () => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_DIVISION,
  };
};

const searchValue = (newSearchValue) => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_SEARCH_VALUE,
    payload: newSearchValue,
  };
};

const orderOfResults = (typeOfNewOrder) => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_ORDER_OF_RESULTS[typeOfNewOrder],
  };
};

const typeOfResults = (newTypeOfResults) => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_TYPE_OF_RESULTS,
    payload: newTypeOfResults,
  };
};

const numberOfResults = (newNumberOfResults) => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_NUMBER_OF_RESULTS,
    payload: newNumberOfResults,
  };
};

const searchResults = (newResults) => {
  return {
    type: MY_PROFILE.MY_RECIPES.UPDATE_RESULTS,
    payload: newResults,
  };
};

// actions dispatchers
export const updateDivision = () => {
  return (dispatch) => {
    dispatch(division());
  };
};

export const updateSearchValue = (newSearchValue) => {
  return (dispatch) => {
    dispatch(searchValue(newSearchValue));
  };
};

export const updateOrderOfResults = (typeOfNewOrder) => {
  return (dispatch) => {
    dispatch(orderOfResults(typeOfNewOrder));
  };
};

export const updateTypeOfResults = (newTypeOfResults) => {
  return (dispatch) => {
    dispatch(typeOfResults(newTypeOfResults));
  };
};

export const updateNumberOfResults = (newNumberOfResults) => {
  return (dispatch) => {
    dispatch(numberOfResults(newNumberOfResults));
  };
};

export const updateSearchResults = (newSearchResults) => {
  return (dispatch) => {
    dispatch(searchResults(newSearchResults));
  };
};
