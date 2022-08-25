// Redux actions types imports
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const signUpForm = (dataSignUpForm) => {
  return {
    type: reduxActionsTypes.updateSignUpForm,
    payload: dataSignUpForm,
  };
};

const updateDataSignUpForm = (dataSignUpForm) => {
  return (dispatch) => {
    dispatch(signUpForm(dataSignUpForm));
  };
};

export default updateDataSignUpForm;
