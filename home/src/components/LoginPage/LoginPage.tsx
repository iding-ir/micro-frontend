import React from "react";

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Login from "auth/components/Login/Login";

const LoginPage = () => {
  return (
    <Layout wide>
      <Header>Login Header</Header>

      <Main>
        <Login />
      </Main>

      <Footer>Login Footer</Footer>
    </Layout>
  );
};

export default LoginPage;
