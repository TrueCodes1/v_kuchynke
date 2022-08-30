// global imports
import { useDispatch } from "react-redux";

// Redux reducers imports
import updateIsLoading from "../../actions/isLoading";

// components imports
import LeftPart from "../../components/SignUp/LeftPart";
import MidPart from "../../components/SignUp/MidPart";
import RightPart from "../../components/SignUp/RightPart";

// styled components imports
import { MainWrapper } from "../../styledComponents/SignUp/SignUp";

const SignUp = () => {
  const dispatch = useDispatch();

  const finishRegistration = () => {
    dispatch(
      updateIsLoading({ isLoading: true, loadingType: "REGISTRATION_SENT" })
    );
    setTimeout(() => {
      dispatch(updateIsLoading({ isLoading: false, loadingType: "" }));
    }, 2000);
  };

  return (
    <MainWrapper>
      <LeftPart />
      <MidPart />
      <RightPart onFinished={finishRegistration} />
    </MainWrapper>
  );
};

export default SignUp;
