import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/firebaseConfig";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
