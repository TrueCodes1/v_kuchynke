// GLOBAL IMPORTS
import { render, screen } from "@testing-library/react";

// REDUX RELATED IMPORTS
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// IMPORTING COMPONENTS TO TEST
import Counter from "../../components/ReleaseDate/Counter";

// TEST
test("it renders correctly and shows up on the screen", () => {
  const middlewares = [thunk];
  const store = configureStore(middlewares);

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
  const counterChild = screen.getAllByTestId("counter-child");

  // EXPECTATIONS FROM THIS TEST
  expect(counterParent).toBeInTheDocument();
  expect(counterChild).toHaveLength(4);
});
