// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import store, { persistor} from "./store";
import Header from "./components/Header/index";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes"


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={2500} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}