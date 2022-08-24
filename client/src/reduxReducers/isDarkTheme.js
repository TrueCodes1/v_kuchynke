// IMPORTING REDUX SCTIONS STATES
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const darkThemeReducer = (state = true, action) => {
  switch (action.type) {
    case reduxActionsTypes.updateTheme:
      return action.payload;
    default:
      return state;
  }
};

export default { darkThemeReducer };
