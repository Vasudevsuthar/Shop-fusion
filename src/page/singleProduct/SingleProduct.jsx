import Layout from "../../component/layout/Layout";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <Layout>
      <div className="single-prod">
        <div className="prod-pic">
          <img
            src="https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg"
            alt=""
          />
        </div>
        <div className="prod-info">
          <h2>Hand Painted Blue Kaushalam Tea Pot in Aluminium</h2>
          <p className="prod-dis">
            Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by
            Mrinalika Jain. Fair pricing. Ethically made. Positive impact.
          </p>
          <p className="prod-price">
            <span>₹ 999.00</span>
          </p>
          <div className="prod-button">
            <div className="qty-button">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="add-cart">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
