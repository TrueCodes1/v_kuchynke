// global imports
import { useDispatch } from "react-redux";

// Redux reducers imports
import updateIsLoading from "../../actions/isLoading";

// components imports
import LogInForm from "../../components/LogIn/LogInForm";

const LogIn = () => {
  const dispatch = useDispatch();

  const finishLogIn = () => {
    dispatch(updateIsLoading({ isLoading: true, loadingType: "LOGIN_SENT" }));
    setTimeout(() => {
      dispatch(updateIsLoading({ isLoading: false, loadingType: "" }));
    }, 2000);
  };
  return (
    <>
      <LogInForm onFinished={finishLogIn} />
    </>
  );
};

export default LogIn;
