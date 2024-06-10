import React, { useContext } from "react";
import "./Dashboard.css";
import MainContext from "../store/main-context";

const OrderDashboard = () => {
  const mainCtx = useContext(MainContext);
  const orderData = mainCtx.orderData;

  return (
    <div className="all-prod">
      <div className="prod-table-head">
        <p>Order ID</p>
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Customer Name</p>
        <p>Address</p>
        <p>Order Date</p>
        <p>Total Amount</p>
        <p>Status</p>
      </div>
      <>
        {orderData.map((order, index) => (
          <div key={index}>
            {order.cartItems.map((item, idx) => (
              <div className="prod-details" key={idx}>
                <p
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {order.orderId}
                </p>
                <p
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </p>
                <p>{item.quantity}</p>
                <p>₹ {item.price}</p>
                <p>{order.name}</p>
                <p>{order.address}</p>
                <p>{order.date}</p>
                <p>₹ {item.price * item.quantity}</p>
                <p style={{color:"#06ba2f"}}>{order.status}</p>
              </div>
            ))}
          </div>
        ))}
      </>
    </div>
  );
};

export default OrderDashboard;
