// Redux actions types imports
import { UPDATE_SIGN_UP_FORM } from "../actionsTypes/actionsTypes";

export const signUpFormReducer = (
  state = {
    firstName: "",
    isFirstNameCorrect: false,
    lastName: "",
    isLastNameCorrect: false,
    email: "",
    isEmailCorrect: false,
    password: "",
    passwordRepeat: "",
    passwordStrength: 0,
    passwordsMatch: false,
    photo: "",
    isReadyInPercentage: 0,
    isSignUpFormReady: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_SIGN_UP_FORM:
      return action.payload;
    default:
      return state;
  }
};
