// global imports
import { connect } from "react-redux";

// Redux actions creators related imports
import updateIsLoading from "../../actions/isLoading";

// components imports
import LogInForm from "../../components/LogIn/LogInForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginRequest: () =>
      dispatch(updateIsLoading({ isLoading: true, loadingType: "LOGIN_SENT" })),
    onLoginResponse: () =>
      dispatch(updateIsLoading({ isLoading: false, loadingType: "" })),
  };
};

export default connect(null, mapDispatchToProps)(LogInForm);
