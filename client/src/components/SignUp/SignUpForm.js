// global imports
import PasswordMeter from "password-meter";
import { useSelector, useDispatch } from "react-redux";

// Redux actions imports
import updateDataSignUpForm from "../../actions/dataSignUpForm";

// components imports
import Input from "../General/Input";
import ProgressBar from "../General/ProgressBar";

// styled components imports
import { PasswordMatch } from "../../styledComponents/SignUp/SignUp";

// functions imports
import {
  validateName,
  validateEmail,
  getPasswordStrength,
  validatePasswordsMatch,
  generalValidation,
  getReadyPercentage,
} from "../../functions/SignUp/SignUp";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.dataSignUpForm);

  const {
    firstName,
    isFirstNameCorrect,
    lastName,
    isLastNameCorrect,
    email,
    isEmailCorrect,
    password,
    passwordRepeat,
    passwordStrength,
    passwordsMatch,
    readyInPercentage,
    photo,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    class UpdatedFormData {
      constructor(name, value) {
        this.firstName = name === "firstName" ? value : firstName;
        this.isFirstNameCorrect = validateName(this.firstName);
        this.lastName = name === "lastName" ? value : lastName;
        this.isLastNameCorrect = validateName(this.lastName);
        this.email = name === "email" ? value : email;
        this.isEmailCorrect = validateEmail(this.email);
        this.password = name === "password" ? value : password;
        this.passwordRepeat =
          name === "passwordRepeat" ? value : passwordRepeat;
        this.passwordStrength = getPasswordStrength(this.password);
        this.passwordsMatch = validatePasswordsMatch(
          this.password,
          this.passwordRepeat
        );
        this.isReadyInPercentage = getReadyPercentage(
          this.isFirstNameCorrect,
          this.isLastNameCorrect,
          this.isEmailCorrect,
          this.passwordsMatch
        );
        this.photo = photo;
        this.isSignUpFormReady = generalValidation(
          this.isFirstNameCorrect,
          this.isLastNameCorrect,
          this.isEmailCorrect,
          this.passwordsMatch
        );
      }
    }

    const updatedFormData = new UpdatedFormData(name, value);

    dispatch(updateDataSignUpForm(updatedFormData));
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Meno"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        isCorrect={isFirstNameCorrect}
      />
      <Input
        type="text"
        placeholder="Priezvisko"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        isCorrect={isLastNameCorrect}
      />
      <Input
        type="text"
        placeholder="E-mail"
        name="email"
        value={email}
        onChange={handleChange}
        isCorrect={isEmailCorrect}
      />
      <Input
        type="password"
        placeholder="Heslo"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <ProgressBar
        text={`sila Tvojho hesla je ${passwordStrength}%`}
        value={passwordStrength}
      />
      <Input
        type="password"
        placeholder="Zopakuj heslo"
        name="passwordRepeat"
        value={passwordRepeat}
        onChange={handleChange}
      />
      <PasswordMatch className="sign-up-password-match">
        {passwordsMatch ? "heslá sa zhodujú" : "heslá sa nezhodujú"}
      </PasswordMatch>
    </>
  );
};

export default SignUpForm;
