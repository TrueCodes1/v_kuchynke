// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// REDUX RELATED IMPORTS
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// IMPORTING COMPONENTS TO TEST
import Counter from "../../components/ReleaseDate/Counter";

// TEST
test("it renders correctly and shows up on the screen", () => {
  const initialState = {};
  const store = configureStore(initialState);

  render(
    <Provider store={store()}>
      <Counter
        dataReleaseCountdown={{
          days: { number: 10, type: "MORE" },
          hours: { number: 10, type: "MORE" },
          minutes: { number: 10, type: "MORE" },
          seconds: { number: 10, type: "MORE" },
        }}
      />
    </Provider>
  );

  const counterParent = screen.getByTestId("counter-parent");

  // EXPECTATIONS FROM THIS TEST
  expect(counterParent).toBeInTheDocument();
  expect(counterParent).toHaveChildren(4);
});
