// global imports
import { combineReducers } from "redux";

// Redux reducers imports
import { releaseCountdownReducer } from "./reducers/dataReleaseCountdown";
import { darkThemeReducer } from "./reducers/isDarkTheme";
import { signUpFormReducer } from "./reducers/dataSignUpForm";
import { loadingReducer } from "./reducers/isLoading";
import {
  openedStatsReducer,
  openedFriendsListReducer,
} from "./reducers/MyProfile/general";
import {
  divisionReducer,
  searchValueReducer,
  orderOfResultsReducer,
  typeOfResults,
  numberOfResults,
} from "./reducers/MyProfile/myRecipes";

// combined reducer holding the state of whole app
export default combineReducers({
  isDarkTheme: darkThemeReducer,
  dataReleaseCountdown: releaseCountdownReducer,
  dataSignUpForm: signUpFormReducer,
  isLoading: loadingReducer,
  myProfileGeneralOpenedStats: openedStatsReducer,
  myProfileGeneralOpenedFriendsList: openedFriendsListReducer,
  myProfileMyRecipesDivision: divisionReducer,
  myProfileMyRecipesSearchValue: searchValueReducer,
  myProfileMyRecipesOrderOfResults: orderOfResultsReducer,
  myProfileMyRecipesTypeOfResults: typeOfResults,
  myProfileMyRecipesNumberOfResults: numberOfResults,
});
