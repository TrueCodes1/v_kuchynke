// global imports
import { connect } from "react-redux";

// components imports
import Question from "../../components/Home/Question";

const mapStateToProps = (state) => {
  return { isDarkTheme: state.isDarkTheme };
};

export default connect(mapStateToProps)(Question);
