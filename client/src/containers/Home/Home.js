// global imports
import { useSelector } from "react-redux";

// components imports
import Button from "../../components/General/Button";
import CookiesPopUp from "../../components/General/CookiesPopUp";
import ChristmasTree from "../../components/General/ChristmasTree";
import Question from "../../components/Home/Question";
import WelcomeText from "../../components/Home/WelcomeText";

const Home = () => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <>
      <Button size="large" text="tip na dnes" link="/daily-tip" />
      <CookiesPopUp isDarkTheme={isDarkTheme} />
      <ChristmasTree />
      <Question />
      <WelcomeText />
    </>
  );
};

export default Home;
