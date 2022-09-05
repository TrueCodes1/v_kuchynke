// global imports
import { connect } from "react-redux";

// components imports
import CookiesPopUp from "../../components/General/CookiesPopUp";

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
  };
};

export default connect(mapStateToProps)(CookiesPopUp);
