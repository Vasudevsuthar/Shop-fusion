import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (product) => {
  const navigate = useNavigate();
  return (
    <div className="product">
      <img className="card-img" onClick={() => navigate("/singleprod")} src={product.image} alt="" />
      <h5 className="card-title">{product.title}</h5>
      <p className="card-price">₹ {product.price}</p>
      <button className="card-btn">Add To Card</button>
    </div>
  );
};

export default Card;
