// IMPORT REDUX ACTION TYPES
import reduxActionsStates from "../reduxActionsStates/reduxActionsStates";

const releaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return {
    type: reduxActionsStates.updateReleaseCountdown,
    payload: dataReleaseCountdownCounter,
  };
};

const updateDataReleaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return (dispatch) => {
    dispatch(releaseCountdownCounter(dataReleaseCountdownCounter));
  };
};

export default updateDataReleaseCountdownCounter;
