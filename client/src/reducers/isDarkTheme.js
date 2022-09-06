// IMPORTING REDUX SCTIONS STATES
import { UPDATE_THEME } from "../actionsTypes/actionsTypes";

export const darkThemeReducer = (state = true, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.payload;
    default:
      return state;
  }
};
