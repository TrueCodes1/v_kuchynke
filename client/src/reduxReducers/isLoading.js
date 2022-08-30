// Redux actions types imports
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const loadingReducer = (
  state = { isLoading: false, loadingType: "" },
  action
) => {
  switch (action.type) {
    case reduxActionsTypes.updateLoading:
      return action.payload;
    default:
      return state;
  }
};

export default { loadingReducer };
