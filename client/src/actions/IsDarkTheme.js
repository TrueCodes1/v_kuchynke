// IMPORT REDUX ACTION TYPES
import reduxActionsStates from "../reduxActionsStates/reduxActionsStates";

const darkTheme = (isDarkTheme) => {
  return {
    type: reduxActionsStates.updateTheme,
    payload: isDarkTheme,
  };
};

const updateIsDarkTheme = (isDarkTheme) => {
  return (dispatch) => {
    dispatch(darkTheme(isDarkTheme));
  };
};

export default updateIsDarkTheme;
