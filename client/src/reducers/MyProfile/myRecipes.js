// Redux actions types imports
import { MY_PROFILE } from "../../actionsTypes/actionsTypes";

export const divisionReducer = (state = "public", action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_DIVISION:
      return state === "public" ? "private" : "public";
    default:
      return state;
  }
};

export const searchValueReducer = (state = "", action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export const orderOfResultsReducer = (state = -1, action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_ORDER_OF_RESULTS.ASC:
      return 1;
    case MY_PROFILE.MY_RECIPES.UPDATE_ORDER_OF_RESULTS.DESC:
      return -1;
    default:
      return state;
  }
};

export const typeOfResults = (state = 0, action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_TYPE_OF_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export const numberOfResults = (state = 0, action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_NUMBER_OF_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export const searchResults = (state = [], action) => {
  switch (action.type) {
    case MY_PROFILE.MY_RECIPES.UPDATE_RESULTS:
      return action.payload;
    default:
      return state;
  }
};
