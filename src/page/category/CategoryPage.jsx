import React, { useContext } from "react";
import Layout from "../../component/layout/Layout";
import { useParams } from "react-router-dom";
import './CategoryPage.css'
import MainContext from "../../component/store/main-context";
import { Card } from "react-bootstrap";

const Category = () => {
  const { categoryname } = useParams();
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  console.log(prodData);
  const filterProdData = prodData.filter((obj) => obj.category.includes(categoryname));
  console.log(filterProdData);
  return (
    <Layout>
      <div className="category-page">
        <h1>Category Page {categoryname}</h1>
        <div className="product-card">
          <div>
            {filterProdData.map((item, index) => (
              <Card
                key={index}
                title={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
