import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Card.css";
import MainContext from "../store/main-context";

const HomePageProductcard = () => {
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  const navigate = useNavigate();

  const exclusiveProduct = prodData.filter(product => product.specificCategorie === "exclusive");
  const fashionProduct = prodData.filter(product => product.specificCategorie === "fashion");
  const featuredProduct = prodData.filter(product => product.specificCategorie === "featured");

  return (
    <>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Exclusive Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {exclusiveProduct.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Fashion Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {fashionProduct.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Featured Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {featuredProduct.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageProductcard;
