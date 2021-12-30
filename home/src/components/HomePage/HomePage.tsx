import React from "react";

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const HomePage = () => (
  <Layout>
    <Header>Home Header</Header>

    <Aside>Home Aside</Aside>

    <Main>Home Main</Main>

    <Footer>Home Footer</Footer>
  </Layout>
);

export default HomePage;
