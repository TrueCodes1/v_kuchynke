// Redux actions types imports
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const signUpForm = (
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
    case reduxActionsTypes.updateSignUpForm:
      return action.payload;
    default:
      return state;
  }
};

export default { signUpForm };
