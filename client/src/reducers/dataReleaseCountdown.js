// Redux actions types imports
import { UPDATE_RELEASE_COUNTDOWN } from "../actionsTypes/actionsTypes";

export const releaseCountdownReducer = (
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  },
  action
) => {
  switch (action.type) {
    case UPDATE_RELEASE_COUNTDOWN:
      return action.payload;
    default:
      return state;
  }
};
