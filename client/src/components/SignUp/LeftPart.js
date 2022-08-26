// components imports
import Input from "../General/Input";
import SignUpForm from "./SignUpForm";

// styled components imports
import { MainWrapper, Header } from "../../styledComponents/SignUp/LeftPart";

const LeftPart = () => {
  return (
    <MainWrapper>
      <Header className="sign-up-header">
        Nechceme od Teba žiadne nepotrebné informácie, len tieto 4:
      </Header>
      <SignUpForm />
    </MainWrapper>
  );
};

export default LeftPart;
