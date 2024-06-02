import Layout from "../../component/layout/Layout";
import ProfileImg from "../../component/img/Profile.png";
import "./OrderPage.css";
import { useContext } from "react";
import AuthContext from "../../component/store/auth-context";

const OrderPage = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  return (
    <Layout>
      <div className="order-component">
        <div className="order-info">
          <h2>Order Details</h2>
          <div className="order-summary">
            <div className="order-summary-left">
              <p>
                <strong>Order Id</strong>
                <br />
                #74557994327
              </p>
              <p>
                <strong>Date</strong>
                <br />4 March, 2023
              </p>
              <p>
                <strong>Total Amount</strong>
                <br />
                ₹84,499
              </p>
              <p>
                <strong>Order Status</strong>
                <br />
                <span className="order-status">Confirmed</span>
              </p>
            </div>
            <div className="order-summary-right">
              <div className="product-info">
                <img
                  src="https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg"
                  alt="Product"
                  className="product-image"
                />
                <div className="product-text">
                  <p>
                    <strong>Nike Air Force 1 07 LV8</strong>
                  </p>
                  <p>Orange</p>
                  <p>x 1</p>
                </div>
              </div>
              <div className="product-price">
                <p>₹61,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;
