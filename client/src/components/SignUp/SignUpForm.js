// global imports
import PasswordMeter from "password-meter";
import { useSelector, useDispatch } from "react-redux";

// Redux actions imports
import updateDataSignUpForm from "../../actions/dataSignUpForm";

// components imports
import Input from "../General/Input";
import PasswordStrength from "./PasswordStrength";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.dataSignUpForm);

  const {
    firstName,
    lastName,
    email,
    password,
    passwordRepeat,
    passwordStrength,
    passwordsMatch,
    photo,
  } = formData;

  const handleChange = (e) => {
    const updatedFormData = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      passwordStrength: "",
      passwordsMatch: "",
      photo: "",
    };
    const { name, value } = e.target;
    Object.keys(updatedFormData).forEach((key) =>
      key === name
        ? (updatedFormData[key] = value)
        : (updatedFormData[key] = formData[key])
    );
    // checking and updating state of passwords match
    if (
      updatedFormData.password.length > 0 &&
      updatedFormData.passwordRepeat.length > 0
    ) {
      updatedFormData.passwordsMatch =
        updatedFormData.password === updatedFormData.passwordRepeat;
    } else {
      updatedFormData.passwordsMatch = false;
    }

    const passwordPercentageStrength =
      new PasswordMeter.PasswordMeter().getResult(
        updatedFormData.password
      ).percent;

    updatedFormData.passwordStrength = Math.round(
      passwordPercentageStrength / 10
    );

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
      />
      <Input
        type="text"
        placeholder="Priezvisko"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="E-mail"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Heslo"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <PasswordStrength strength={passwordStrength} />
      <Input
        type="password"
        placeholder="Zopakuj heslo"
        name="passwordRepeat"
        value={passwordRepeat}
        onChange={handleChange}
      />
      {passwordsMatch ? <p>heslá sa zhodujú</p> : <p>heslá sa nezhodujú</p>}
    </>
  );
};

export default SignUpForm;
