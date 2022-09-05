// components imports
import LeftPart from "../../components/SignUp/LeftPart";
import MidPart from "../../components/SignUp/MidPart";

// containers imports
import RightPart from "../../containers/SignUp/RightPart";

// styled components imports
import { MainWrapper } from "../../styledComponents/SignUp/SignUp";

const SignUp = () => {
  return (
    <MainWrapper>
      <LeftPart />
      <MidPart />
      <RightPart />
    </MainWrapper>
  );
};

export default SignUp;
