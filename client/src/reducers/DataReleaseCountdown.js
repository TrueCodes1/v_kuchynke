// IMPORTING REDUX SCTIONS STATES
import reduxActionsStates from "../reduxActionsStates/reduxActionsStates";

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
    case reduxActionsStates.updateReleaseCountdown:
      return action.payload;
    default:
      return state;
  }
};

export default releaseCountdownReducer;
