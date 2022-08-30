// IMPORT REDUX ACTION TYPES
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const loading = (isLoading) => {
  return {
    type: reduxActionsTypes.updateLoading,
    payload: isLoading,
  };
};

const updateIsLoading = (isLoading) => {
  return (dispatch) => {
    dispatch(loading(isLoading));
  };
};

export default updateIsLoading;
