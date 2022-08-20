// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// IMPORTING COMPONENTS TO TEST
import Branding from "../../components/ReleaseDate/Branding";

//TESTS
test("it renders correctly and has correct classes", () => {
  render(<Branding isDarkTheme="false" />);

  const brandingParent = screen.getByTestId("branding-parent");

  // EXPECTATIONS FROM THE TEST
  expect(brandingParent).toBeInTheDocument();
  // WITH isDarkTheme PROP ASSIGNED "false" SHOULD THE PARENT HAVE CLASS OF "light"
  expect(brandingParent).toHaveClass("light");
});
