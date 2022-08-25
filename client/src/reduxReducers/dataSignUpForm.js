// Redux actions types imports
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const signUpForm = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    passwordStrength: "",
    passwordsMatch: false,
    photo: "",
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
