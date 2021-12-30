import React from "react";

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Auth from "auth/components/Auth/Auth";

const LoginPage = () => (
  <Layout>
    <Header>Auth Header</Header>

    <Aside>Auth Aside</Aside>

    <Main>
      <Auth />
    </Main>

    <Footer>Auth Footer</Footer>
  </Layout>
);

export default LoginPage;
