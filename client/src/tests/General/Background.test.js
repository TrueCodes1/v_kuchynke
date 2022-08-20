// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// IMPORTING COMPONENTS TO TEST
import Background from "../../components/General/Background";

// TESTS
test("it renders correctly with correct classes on props", () => {
  render(<Background isDarkTheme="false" />);

  const backgroundParent = screen.getByTestId("background-parent");

  // EXPECTATIONS FROM THIS TEST
  expect(backgroundParent).toBeInTheDocument();
  expect(backgroundParent).toHaveClass("light"); // WHEN isDarkTheme PROP IS FALSE, CLASS "light" SHOULD BE IN THE CLASSLIST
});
