// Redux actions types imports
import { MY_PROFILE } from "../../actionsTypes/actionsTypes";

export const openedStatsReducer = (state = false, action) => {
  switch (action.type) {
    case MY_PROFILE.GENERAL.UPDATE_OPENED_STATS:
      return !state;
    default:
      return state;
  }
};

export const openedFriendsListReducer = (state = false, action) => {
  switch (action.type) {
    case MY_PROFILE.GENERAL.UPDATE_OPENED_FRIENDS_LIST:
      return !state;
    default:
      return state;
  }
};
