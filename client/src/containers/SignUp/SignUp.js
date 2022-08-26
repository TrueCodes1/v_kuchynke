// components imports
import LeftPart from "../../components/SignUp/LeftPart";
import MidPart from "../../components/SignUp/MidPart";
import RightPart from "../../components/SignUp/RightPart";

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
