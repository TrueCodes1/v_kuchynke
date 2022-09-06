// IMPORT REDUX ACTION TYPES
import { UPDATE_RELEASE_COUNTDOWN } from "../actionsTypes/actionsTypes";

const releaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return {
    type: UPDATE_RELEASE_COUNTDOWN,
    payload: dataReleaseCountdownCounter,
  };
};

const updateDataReleaseCountdownCounter = (dataReleaseCountdownCounter) => {
  return (dispatch) => {
    dispatch(releaseCountdownCounter(dataReleaseCountdownCounter));
  };
};

export default updateDataReleaseCountdownCounter;
