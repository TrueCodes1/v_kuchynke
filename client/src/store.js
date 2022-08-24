// global imports
import { combineReducers } from "redux";

// Redux reducers imports
import darkThemeReducer from "./reduxReducers/isDarkTheme";
import countdownReducer from "./reduxReducers/dataReleaseCountdown";

// combined reducer holding the state of whole app
export default combineReducers({
  isDarkTheme: darkThemeReducer.darkThemeReducer,
  dataReleaseCountdown: countdownReducer.releaseCountdownReducer,
});
