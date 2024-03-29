import React from "react";
import ReactDOM from "react-dom/client";
import HttpsRedirect from "react-https-redirect";
// REDUX RELATED IMPORTS
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
  // THE HTTPSREDIRECT PARENT SHOULD BE REPLACED BY ANOTHER
  // METHOD OF REDIRECTING VIA SERVER
  <HttpsRedirect>
    <Provider store={store}>
      <App />
    </Provider>
  </HttpsRedirect>
);
