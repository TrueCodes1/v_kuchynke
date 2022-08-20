// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// REDUX RELATED IMPORTS
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// IMPORTING COMPONENTS TO TEST
import ThemeSwitch from "../../components/General/ThemeSwitch";

// TESTS
test("it renders correctly with correct classes of parent and 2 children", () => {
  const initialState = {};
  const store = configureStore(initialState);

  render(
    <Provider store={store()}>
      <ThemeSwitch isDarkTheme="false" />
    </Provider>
  );

  const themeParent = screen.getByTestId("theme-switch-parent");
  const themeChildLeft = screen.getByTestId("theme-switch-left");
  const themeChildRight = screen.getByTestId("theme-switch-right");

  // EXPECTATIONS FROM THIS TEST
  expect(themeParent).toBeInTheDocument();
  // WITH isDarkTheme PROP ASSIGNED "false" THE LEFT
  // CHILD SHOULD NOT HAVE CLASS OF LEFT AND THE RIGHT SHOULD
  expect(themeChildLeft).not.toHaveClass("leave");
  expect(themeChildRight).toHaveClass("leave");
});
