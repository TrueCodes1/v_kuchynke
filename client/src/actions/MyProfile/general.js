// IMPORT REDUX ACTION TYPES
import { MY_PROFILE } from "../../actionsTypes/actionsTypes";

// actions creators
const openedStats = () => {
  return {
    type: MY_PROFILE.GENERAL.UPDATE_OPENED_STATS,
  };
};

const openedFriendsList = () => {
  return {
    type: MY_PROFILE.GENERAL.UPDATE_OPENED_FRIENDS_LIST,
  };
};

// actions dispatchers
export const updateOpenedStats = () => {
  return (dispatch) => {
    dispatch(openedStats());
  };
};

export const updateOpenedFriendsList = () => {
  return (dispatch) => {
    dispatch(openedFriendsList());
  };
};
