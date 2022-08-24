// IMPORTING REDUX SCTIONS STATES
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const releaseCountdownReducer = (
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  },
  action
) => {
  switch (action.type) {
    case reduxActionsTypes.updateReleaseCountdown:
      return action.payload;
    default:
      return state;
  }
};

export default { releaseCountdownReducer };
