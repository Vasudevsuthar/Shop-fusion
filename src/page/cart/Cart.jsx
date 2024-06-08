import React, { useContext, useState } from "react";
import Layout from "../../component/layout/Layout";
import "./Cart.css";
import CartContext from "../../component/cartContext/Context";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const [loadingItemId, setLoadingItemId] = useState(null);
  const [loadingType, setLoadingType] = useState(null);

  const addToCartHandler = (item) => {
    setLoadingItemId(item._id);
    setLoadingType("add");
    setTimeout(() => {
      setLoadingItemId(null);
      cartCtx.addItem({ ...item, quantity: 1 });
    }, 2000);
  };

  const removeItemHandler = (item) => {
    setLoadingItemId(item._id);
    setLoadingType("remove");
    setTimeout(() => {
      setLoadingItemId(null);
      cartCtx.removeItem(item);
    }, 2000);
  };

  return (
    <Layout>
      <div className="bag">
        <div className="cart-heading">
          <h2>Shopping Bag</h2>
          <p>
            <strong>{cartItems.length} product{cartItems.length > 1 ? 's' : ''}</strong> in your bag.
          </p>
        </div>
        <div className="main-bag">
          <div className="cart-prod">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td className="prod">
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <h5>{item.name}</h5>
                      </div>
                    </td>
                    <td>
                      <span>₹ {item.price}</span>
                    </td>
                    <td>
                      <div className="qty">
                        <button
                          onClick={() => addToCartHandler(item)}
                          disabled={loadingItemId === item._id && loadingType === "add"}
                          className={loadingItemId === item._id && loadingType === "add" ? "loading" : ""}
                        >
                          +
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => removeItemHandler(item)}
                          disabled={loadingItemId === item._id && loadingType === "remove"}
                          className={loadingItemId === item._id && loadingType === "remove" ? "loading" : ""}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>₹ {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-details-wrapper">
            <div className="cart-details">
              <div className="address">
                <h5>Calculated Shipping</h5>
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="State" />
                <div className="add">
                  <input type="text" placeholder="District" />
                  <input type="number" placeholder="Pin Code" />
                </div>
              </div>
              <div className="cart-total">
                <h5>Cart Total</h5>
                <div className="cart-summary">
                  <div className="subtotal">
                    <div>Cart SubTotal</div>
                    <div>
                      ₹
                      {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </div>
                  </div>
                  <div className="subtotal">
                    <div>Delivery Charges</div>
                    <div>Free</div>
                  </div>
                  <div className="total">
                    <div>Cart Total</div>
                    <div>
                      ₹
                      {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </div>
                  </div>
                </div>
                <button className="apply">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
