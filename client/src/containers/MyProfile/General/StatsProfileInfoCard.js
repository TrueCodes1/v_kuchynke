// global imports
import { connect } from "react-redux";

// Redux actions creators imports
import { updateOpenedStats } from "../../../actions/MyProfile/general";

// components imports
import ProfileInfo from "../../../components/General/ProfileInfo";

const mapStateToProps = (state) => {
  return {
    isOpened: state.myProfileGeneralOpenedStats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickOpen: () => {
      dispatch(updateOpenedStats());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
