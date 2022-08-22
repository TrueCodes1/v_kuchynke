// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// IMPORTING COMPONENTS TO TEST
import CounterChild from "../../components/ReleaseDate/CounterChild";

//TESTS
test("it renders correctly and has correct classes and correct content", () => {
  render(
    <CounterChild
      isDarkTheme="false"
      content={{ number: 5, type: "MORE" }}
      type="DAY"
    />
  );

  const counterChild = screen.getByTestId("counter-child");
  const counterChildNumber = screen.getByTestId("counter-child-number");
  const counterChildText = screen.getByTestId("counter-child-text");

  // EXPECTATIONS FROM THE TEST
  expect(counterChild).toBeInTheDocument();
  // WITH isDarkTheme PROP ASSIGNED "false" SHOULD THE PARENT HAVE CLASS OF "light"
  expect(counterChild).toHaveClass("light");
  expect(counterChildNumber).toHaveTextContent("5");
  expect(counterChildText).toHaveTextContent("dní");
});
