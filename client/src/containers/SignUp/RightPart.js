// global imports
import { connect } from "react-redux";

// Redux actions creators related imports
import updateIsLoading from "../../actions/isLoading";

// components imports
import RightPart from "../../components/SignUp/RightPart";

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpRequest: () =>
      dispatch(
        updateIsLoading({ isLoading: true, loadingType: "REGISTRATION_SENT" })
      ),
    onSignUpResponse: () =>
      dispatch(updateIsLoading({ isLoading: false, loadingType: "" })),
  };
};

export default connect(null, mapDispatchToProps)(RightPart);
