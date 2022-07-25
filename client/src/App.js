// IMPORTING GLOBAL STYLES
import GlobalStyle from "./styles/globalStyles";

// IMPORTING STATEFUL CONTAINERS
import ReleaseDate from "./containers/ReleaseDate";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ReleaseDate />
    </>
  );
};

export default App;
