import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => (
  <Layout>
    <Header>Header</Header>

    <Aside>Aside</Aside>

    <Main>Main</Main>

    <Footer>Footer</Footer>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("app"));
