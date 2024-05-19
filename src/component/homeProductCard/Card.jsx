import "./Card.css";

const Card = (product) => {
  return (
    <div className="product">
      <img className="card-img" src={product.image} alt="" />
      <h5 className="card-title">{product.title}</h5>
      <p className="card-price">₹ {product.price}</p>
      <button className="card-btn">Add To Card</button>
    </div>
  );
};

export default Card;
