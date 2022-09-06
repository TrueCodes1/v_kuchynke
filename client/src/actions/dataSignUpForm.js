// Redux actions types imports
import { UPDATE_SIGN_UP_FORM } from "../actionsTypes/actionsTypes";

const signUpForm = (dataSignUpForm) => {
  return {
    type: UPDATE_SIGN_UP_FORM,
    payload: dataSignUpForm,
  };
};

const updateDataSignUpForm = (dataSignUpForm) => {
  return (dispatch) => {
    dispatch(signUpForm(dataSignUpForm));
  };
};

export default updateDataSignUpForm;
