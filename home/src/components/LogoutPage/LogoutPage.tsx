import React, { useEffect } from "react";

import useLogout from "auth/components/Logout/Logout";

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const LogoutPage = () => {
  const { logout } = useLogout();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout wide>
      <Header>Logout</Header>

      <Main>Logging out...</Main>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LogoutPage;
