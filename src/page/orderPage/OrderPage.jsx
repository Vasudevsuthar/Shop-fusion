import Layout from "../../component/layout/Layout";
import MainContext from "../../component/store/main-context";
import "./OrderPage.css";
import { useContext } from "react";

const OrderPage = () => {
  const mainCtx = useContext(MainContext);
  const orderData = mainCtx.orderDataForUser;

  return (
    <Layout>
      <div className="order-component">
        <div className="order-info">
          <h2>Order Details</h2>
          {orderData.length === 0 ? (
            <div className="empty-order">
              <h4>You haven't ordered any products yet</h4>
            </div>
          ) : (
            <>
              {orderData.map((order, index) => (
                <div key={index}>
                  {order.cartItems.map((item, idx) => (
                    <div className="order-summary" key={idx}>
                      <div className="order-summary-left">
                        <p>
                          <strong>Order Id</strong>
                          <br />
                          {item._id}
                        </p>
                        <p>
                          <strong>Date</strong>
                          <br />
                          {order.date}
                        </p>
                        <p>
                          <strong>Total Amount</strong>
                          <br />
                          {item.price * item.quantity}
                        </p>
                        <p>
                          <strong>Order Status</strong>
                          <br />
                          <span className="order-status">{order.status}</span>
                        </p>
                      </div>
                      <div className="order-summary-right">
                        <div className="product-info">
                          <img
                            src={item.image}
                            alt="Product"
                            className="product-image"
                          />
                          <div className="product-text">
                            <p>
                              <strong>{item.name}</strong>
                            </p>
                            <p>x {item.quantity}</p>
                          </div>
                        </div>
                        <div className="product-price">
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;
