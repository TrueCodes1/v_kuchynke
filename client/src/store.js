// global imports
import { combineReducers } from "redux";

// Redux reducers imports
import countdownReducer from "./reduxReducers/dataReleaseCountdown";
import darkThemeReducer from "./reduxReducers/isDarkTheme";
import signUpFormReducer from "./reduxReducers/dataSignUpForm";

// combined reducer holding the state of whole app
export default combineReducers({
  isDarkTheme: darkThemeReducer.darkThemeReducer,
  dataReleaseCountdown: countdownReducer.releaseCountdownReducer,
  dataSignUpForm: signUpFormReducer.signUpForm,
});
