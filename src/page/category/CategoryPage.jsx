import React, { useContext, useEffect, useState } from "react";
import Layout from "../../component/layout/Layout";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";
import MainContext from "../../component/store/main-context";
import Card from "../../component/homeProductCard/Card";
import Loader from "../../component/loader/Loader";

const Category = () => {
  const { categoryname } = useParams();
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [categoryname]);

  const filterProdData = prodData.filter((obj) =>
    obj.category.includes(categoryname)
  );

  return (
    <Layout>
      <div className="category-page">
        <h1>{categoryname}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {filterProdData.length > 0 ? (
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
            ) : (
              <div className="not-found-prod">
                <img
                  className=" mb-2"
                  src="https://narayanapearls.in/assets/images/not-found.jpg"
                  alt=""
                />
                <h5>No {categoryname} product found</h5>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Category;
