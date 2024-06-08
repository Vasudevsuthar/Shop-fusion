import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../cartContext/Context";
import Loader from "../loader/Loader";

const Card = (product) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const item = {
    name: product.title,
    image: product.image,
    price: product.price,
    quantity: Number(1),
  };

  useEffect(() => {
    const foundItem = cartCtx.items.find(
      (cartItem) => cartItem.name === product.title
    );
    console.log(foundItem);
    setIsInCart(!!foundItem);
  }, [cartCtx.items, product.title]);

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
    <div className="product">
      <img
        className="card-img"
        onClick={() => navigate(`/singleprod/${product.id}`)}
        src={product.image}
        alt=""
      />
      <h5 className="card-title">{product.title}</h5>
      <p className="card-price">₹ {product.price}</p>
      <button
        className={`card-btn ${isInCart ? "go-to-cart" : ""}`}
        onClick={isInCart ? goToCartHandler : addToCartHandler}
      >
        {isLoading ? <Loader /> : isInCart ? "Go to Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default Card;
