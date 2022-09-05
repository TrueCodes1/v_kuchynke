// components imports
import Button from "../../components/General/Button";
import ChristmasTree from "../../components/General/ChristmasTree";
import WelcomeText from "../../components/Home/WelcomeText";

// containers imports
import CookiesPopup from "../../containers/Home/CookiesPopUp";
import Question from "../../containers/Home/Question";

const Home = () => {
  return (
    <>
      <Button
        type="link"
        size="large"
        text="tip na dnes"
        onClick="/daily-tip"
        classNames="home-page-daily-tip-button"
      />
      <ChristmasTree />
      <CookiesPopup />
      <Question />
      <WelcomeText />
    </>
  );
};

export default Home;
