import React from "react";
import ReactDOM from "react-dom";

import "home/App.css";
import Layout from "home/components/Layout/Layout";
import Header from "home/components/Header/Header";
import Aside from "home/components/Aside/Aside";
import Main from "home/components/Main/Main";
import Footer from "home/components/Footer/Footer";

const App = () => (
  <Layout>
    <Header>Product Header</Header>

    <Aside>Product Aside</Aside>

    <Main>Product Main</Main>

    <Footer>Product Footer</Footer>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("app"));
