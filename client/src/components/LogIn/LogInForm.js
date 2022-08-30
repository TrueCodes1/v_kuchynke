// global imports
import { useState } from "react";

// components imports
import Button from "../General/Button";
import ChristmasTree from "../General/ChristmasTree";
import Input from "../General/Input";

// styled components imports
import {
  MainWrapper,
  TextUnderInput,
} from "../../styledComponents/LogIn/LogInForm";

const LogInForm = ({ onFinished }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    <>
      <ChristmasTree />
      <MainWrapper>
        <Input
          type="text"
          placeholder="E-mail"
          name="login-email"
          value={loginEmail}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Heslo"
          name="login-password"
          value={loginPassword}
          onChange={handlePasswordChange}
        />
        <TextUnderInput className="log-in-form-text">
          Zabudol som svoje heslo. Čo teraz? &nbsp; :-/
        </TextUnderInput>
        <Button
          type="click"
          size="mid"
          text="prihlás ma"
          onClick={onFinished}
          disabled={loginEmail.length === 0 || loginPassword.length === 0}
        />
      </MainWrapper>
    </>
  );
};

export default LogInForm;
