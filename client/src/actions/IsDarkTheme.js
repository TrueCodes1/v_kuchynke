
// IMPORT REDUX ACTION TYPES
import reduxActionsStates from "../reduxActionsStates/reduxActionsStates";

const isDarkTheme = (isDarkTheme) => {
    return {
      type: reduxActionsStates.updateTheme,
      payload: isDarkTheme
    };
  };
  
  const updateIsDarkTheme= (isDarkTheme) => {
    return (dispatch) => {
      dispatch(isDarkTheme(isDarkTheme));
    };
  };
  
  module.exports = { updateIsDarkTheme };
  