// IMPORTING REDUX SCTIONS STATES
import reduxActionsStates from "../reduxActionsStates/reduxActionsStates";

const darkThemeReducer = (state = true, action) => {
  switch (action.type) {
    case reduxActionsStates.updateTheme:
      return action.payload;
    default:
      return state;
  }
};

export default darkThemeReducer;
