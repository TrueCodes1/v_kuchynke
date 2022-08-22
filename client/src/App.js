// global imports
import { useSelector } from "react-redux";
import classNames from "classnames";

// styles
import GlobalStyle from "./styles/globalStyles";

// everything is wrapped inside StyledBackground, which is reason
// why in App.js is a styled component imported
import { StyledBackground } from "./styled_components/background/Background";

import ThemeSwitch from "./components/General/ThemeSwitch";

// pages
import Countdown from "./pages/Countdown";
import Home from "./pages/Home";

const App = () => {
  // global Redux state, the only one needed in App.js
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  return (
    <>
      <StyledBackground
        className={classNames(
          { background: true },
          { dark: isDarkTheme === true },
          { light: isDarkTheme !== true }
        )}
      >
        <GlobalStyle />
        <ThemeSwitch isDarkTheme={isDarkTheme} />
        <Countdown />
        <Home />
      </StyledBackground>
    </>
  );
};

export default App;
