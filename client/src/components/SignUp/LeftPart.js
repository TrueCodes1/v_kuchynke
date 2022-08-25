// components imports
import Input from "../General/Input";
import SignUpForm from "./SignUpForm";

// styled components imports
import { Header } from "../../styledComponents/SignUp/LeftPart";

const LeftPart = () => {
  return (
    <>
      <Header>
        Nechceme od Teba žiadne nepotrebné informácie, len tieto 4:
      </Header>
      <SignUpForm />
    </>
  );
};

export default LeftPart;
