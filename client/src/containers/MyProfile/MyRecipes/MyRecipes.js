// global imports
import { connect } from "react-redux";

// Redux actions creators imports
import {
  updateDivision,
  updateSearchValue,
  updateOrderOfResults,
  updateTypeOfResults,
} from "../../../actions/MyProfile/myRecipes";

// components imports
import MyRecipes from "../../../components/MyProfile/MyRecipes";

const mapStateToProps = (state) => {
  return {
    division: state.myProfileMyRecipesDivision,
    searchValue: state.myProfileMyRecipesSearchValue,
    order: state.myProfileMyRecipesOrderOfResults,
    type: state.myProfileMyRecipesTypeOfResults,
    numberOfResults: state.myProfileMyRecipesNumberOfResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDivisionChange: () => {
      dispatch(updateDivision());
    },
    onSearchValueChange: (e) => {
      dispatch(updateSearchValue(e.target.value));
    },
    onOrderChange: (typeOfNewOrder) => {
      dispatch(updateOrderOfResults(typeOfNewOrder));
    },
    onTypeChange: (idOfNewType) => {
      dispatch(updateTypeOfResults(idOfNewType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipes);
