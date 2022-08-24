// IMPORT REDUX ACTION TYPES
import reduxActionsTypes from "../reduxActionsTypes/reduxActionsTypes";

const releaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return {
    type: reduxActionsTypes.updateReleaseCountdown,
    payload: dataReleaseCountdownCounter,
  };
};

const updateDataReleaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return (dispatch) => {
    dispatch(releaseCountdownCounter(dataReleaseCountdownCounter));
  };
};

export default updateDataReleaseCountdownCounter;
