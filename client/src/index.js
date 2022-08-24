import React from "react";
import ReactDOM from "react-dom/client";
import HttpsRedirect from "react-https-redirect";
import { BrowserRouter } from "react-router-dom";
// redux related imports
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// IMPORTING WHOLE APP COMPONENT
import App from "./App";

// IMPORTING REDUX MAIN REDUCER
import mainReducer from "./store";

//CODE TO SETUP REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //TO-DO:
  //
  // the https wrapper should be replaced by server side redirecting
  //<HttpsRedirect>
  //</HttpsRedirect>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  //{/* </HttpsRedirect> */}
);
