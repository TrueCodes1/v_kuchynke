// IMPORT REDUX ACTION TYPES
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const darkTheme = (isDarkTheme) => {
  return {
    type: reduxActionsTypes.updateTheme,
    payload: isDarkTheme,
  };
};

const updateIsDarkTheme = (isDarkTheme) => {
  return (dispatch) => {
    dispatch(darkTheme(isDarkTheme));
  };
};

export default updateIsDarkTheme;
