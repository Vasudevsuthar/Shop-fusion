import React from "react";
import Layout from "../../component/layout/Layout";
import Category from '../../component/category/Category';
import HomePageProductcard from "../../component/homeProductCard/HomePageProductCard";

const Home = () => {
  return (
    <Layout>
      <Category />
      <HomePageProductcard />
    </Layout>
  );
};

export default Home;
