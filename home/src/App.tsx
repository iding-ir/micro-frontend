import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import LogoutPage from "./components/LogoutPage/LogoutPage";

import { store, persistor } from "store/app/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
