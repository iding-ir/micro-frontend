import React from "react";

import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Products from "products/components/Products";

const ProductsPage = () => (
  <Layout>
    <Header>Products</Header>

    <Aside />

    <Main>
      <Products />
    </Main>

    <Footer>Footer</Footer>
  </Layout>
);

export default ProductsPage;
