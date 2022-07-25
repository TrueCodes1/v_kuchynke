import { combineReducers } from "redux";

// IMPORTING REDUX REDUCERS
// NOTE THAT THE NAMES OF IMPORTS ARE NOT THE SAME AS THE EXPORTS IN
// THE REDUCERS
import isDarkTheme from "./reducers/isDarkTheme";

// EXPORTING COMBINED REDUCER THAT HOLDS ALL
// THE STATES OF THE WHOLE APP
export default combineReducers({
  isDarkTheme,
});
