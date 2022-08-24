// global imports
import { useSelector } from "react-redux";
import classNames from "classnames";

// styles
import GlobalStyle from "./styles/globalStyles";
import { Route, Routes } from "react-router-dom";

// everything is wrapped inside StyledBackground, which is reason
// why in App.js is a styled component imported
import { StyledBackground } from "./styledComponents/Background/Background";

// stable components imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// pages
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";
import Countdown from "./pages/Countdown/Countdown";
import DailyTip from "./pages/DailyTip/DailyTip";
import FAQ from "./pages/FAQ/FAQ";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import MyProfile from "./pages/MyProfile/MyProfile";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";

const App = () => {
  // global Redux state, the only one needed in App.js
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <>
      <GlobalStyle />
      <StyledBackground
        className={`background ${classNames(
          { dark: isDarkTheme === true },
          { light: isDarkTheme !== true }
        )}`}
      >
        <Navbar isDarkTheme={isDarkTheme} />
        <Footer isDarkTheme={isDarkTheme} />
        {/* <Countdown isDarkTheme={isDarkTheme} /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/daily-tip" element={<DailyTip />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feed" element={<Feed />} />
          <Route index element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </StyledBackground>
    </>
  );
};

export default App;
