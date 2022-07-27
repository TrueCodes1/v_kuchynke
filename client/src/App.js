// IMPORTING GLOBAL STYLES
import GlobalStyle from "./styles/globalStyles";

// IMPORTING STATEFUL CONTAINERS
import ReleaseDate from "./containers/ReleaseDate";
import BackgroundContainer from "./containers/BackgroundContainer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BackgroundContainer />
      <ReleaseDate />
    </>
  );
};

export default App;
