import React from "react";
import Layout from "../../component/layout/Layout";
import "./Cart.css";

const cardProd = [
  {
    name: "Fashion",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    price: 99,
    qty: 1,
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    price: 99,
    qty: 1,
  },
];

const Cart = () => {
  return (
    <Layout>
      <div className="bag">
        <div className="cart-heading">
          <h2>Shopping Bag</h2>
          <p>
            <strong>2 items</strong> in your bag.
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
                {cardProd.map((prod) => (
                  <tr key={prod.name}>
                    <td className="prod-img">
                      <div>
                        <img src={prod.image} alt="" />
                      </div>
                      <div>
                        <h5>{prod.name}</h5>
                      </div>
                    </td>
                    <td>
                      <span>₹ {prod.price}</span>
                    </td>
                    <td>
                      <div className="qty">
                        <button>+</button>
                        <p>{prod.qty}</p>
                        <button>-</button>
                      </div>
                    </td>
                    <td>₹ 999</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  <div>₹999</div>
                </div>
                <div className="subtotal">
                  <div>Delivery Charges</div>
                  <div>Free</div>
                </div>
                <div className="total">
                  <div>Cart Total</div>
                  <div>₹999</div>
                </div>
              </div>
              <button className="apply">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
