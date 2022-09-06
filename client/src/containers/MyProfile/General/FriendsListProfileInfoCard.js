// global imports
import { connect } from "react-redux";

// Redux actions creators imports
import { updateOpenedFriendsList } from "../../../actions/MyProfile/general";

// components imports
import ProfileInfo from "../../../components/General/ProfileInfo";

const mapStateToProps = (state) => {
  return {
    isOpened: state.myProfileGeneralOpenedFriendsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickOpen: () => {
      dispatch(updateOpenedFriendsList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
