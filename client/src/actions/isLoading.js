// IMPORT REDUX ACTION TYPES
import { UPDATE_LOADING } from "../actionsTypes/actionsTypes";

const loading = (isLoading) => {
  return {
    type: UPDATE_LOADING,
    payload: isLoading,
  };
};

const updateIsLoading = (isLoading) => {
  return (dispatch) => {
    dispatch(loading(isLoading));
  };
};

export default updateIsLoading;
