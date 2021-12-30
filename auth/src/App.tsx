import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "home/App.css";
import Layout from "home/components/Layout/Layout";
import Header from "home/components/Header/Header";
import Aside from "home/components/Aside/Aside";
import Main from "home/components/Main/Main";
import Footer from "home/components/Footer/Footer";

import Auth from "auth/components/Auth/Auth";

import { store, persistor } from "store/app/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Header>Auth Header</Header>

        <Aside>
          <Auth />
        </Aside>

        <Main>Auth Main</Main>

        <Footer>Auth Footer</Footer>
      </Layout>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
