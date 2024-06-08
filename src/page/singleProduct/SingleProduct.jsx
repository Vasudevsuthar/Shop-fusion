import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Layout from "../../component/layout/Layout";
import MainContext from "../../component/store/main-context";
import CartContext from "../../component/cartContext/Context";
import Loader from "../../component/loader/Loader"; 
import "./SingleProduct.css";

const SingleProduct = () => {
  const { productid } = useParams();
  const mainCtx = useContext(MainContext);
  const cartCtx = useContext(CartContext);
  const product = mainCtx.productData.find((item) => item.id === productid);
  const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      const foundItem = cartCtx.items.find((cartItem) => cartItem.name === product.name);
      setIsInCart(!!foundItem);
    }
  }, [cartCtx.items, product]);

  if (!product) {
    return (
      <Layout>
        <div className="single-prod">
          <h2>Product not found</h2>
        </div>
      </Layout>
    );
  }

  const item = {
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const addToCartHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      cartCtx.addItem(item);
    }, 2000);
  };

  const goToCartHandler = () => {
    navigate("/cart");
  };

  return (
    <Layout>
      <div className="single-prod">
        <div className="prod-pic">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="prod-info">
          <h2>{product.name}</h2>
          <p className="prod-dis">{product.description}</p>
          <p className="prod-price">
            <span>₹ {product.price}</span>
          </p>
          <div className="prod-button">
            <div className="add-cart">
              <button
                onClick={isInCart ? goToCartHandler : addToCartHandler}
                className={isInCart ? "go-to-cart" : ""}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader />
                ) : isInCart ? (
                  "Go to Cart"
                ) : (
                  "Add To Cart"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
