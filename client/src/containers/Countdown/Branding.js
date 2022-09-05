// global imports
import { connect } from "react-redux";

// components imports
import Branding from "../../components/Countdown/Branding";

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
  };
};

export default connect(mapStateToProps)(Branding);
