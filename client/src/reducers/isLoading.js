// Redux actions types imports
import { UPDATE_LOADING } from "../actionsTypes/actionsTypes";

export const loadingReducer = (
  state = { isLoading: false, loadingType: "" },
  action
) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return action.payload;
    default:
      return state;
  }
};
