// IMPORT REDUX ACTION TYPES
import { UPDATE_THEME } from "../actionsTypes/actionsTypes";

const darkTheme = (isDarkTheme) => {
  return {
    type: UPDATE_THEME,
    payload: isDarkTheme,
  };
};

const updateIsDarkTheme = (isDarkTheme) => {
  return (dispatch) => {
    dispatch(darkTheme(isDarkTheme));
  };
};

export default updateIsDarkTheme;
