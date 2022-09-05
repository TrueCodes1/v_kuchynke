// global imports
import { connect } from "react-redux";

// components imports
import Counter from "../../components/Countdown/Counter";

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
    dataReleaseCountdown: state.dataReleaseCountdown,
  };
};

export default connect(mapStateToProps)(Counter);
