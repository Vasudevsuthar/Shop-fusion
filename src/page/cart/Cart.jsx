import React, { useContext, useRef, useState } from "react";
import Layout from "../../component/layout/Layout";
import "./Cart.css";
import CartContext from "../../component/cartContext/Context";
import MainContext from "../../component/store/main-context";
import toast from "react-hot-toast";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const mainCtx = useContext(MainContext);
  const userData = mainCtx.userData;
  const cartItems = cartCtx.items;
  const email = userData.email;
  const cleanedEmail = email.replace(/[@.]/g, "");
  const countryRef = useRef();
  const stateRef = useRef();
  const districtRef = useRef();
  const pincodeRef = useRef();
  const [loadingItemId, setLoadingItemId] = useState(null);
  const [loadingType, setLoadingType] = useState(null);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

  const placeOrderHandler = async () => {
    const country = countryRef.current.value;
    const state = stateRef.current.value;
    const district = districtRef.current.value;
    const pinCode = pincodeRef.current.value;


    const orderData = {
      cartItems,
      name: userData.firstName,
      email: userData.email,
      address: district,
      pincode: pinCode,
      status: "Confirmed",
      date: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };

    if (country === "" || state === "" || district === "" || pinCode === "") {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch(
        `https://shop-fushion-default-rtdb.firebaseio.com/orders/${cleanedEmail}.json`,
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        if(!response.ok){
          throw new Error("Failed to place order");
        }

        const data = await response.json();
        console.log(data);
        toast.success("Order placed successfully");
        cartCtx.clearCartFromBackend(cleanedEmail);
        mainCtx.fetchOrderDataForUser();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Layout>
      <div className="bag">
        <div className="cart-heading">
          <h2>Shopping Bag</h2>
          <p>
            <strong>
              {cartItems.length} product{cartItems.length > 1 ? "s" : ""}
            </strong>{" "}
            in your bag.
          </p>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h4>Please add product in your cart</h4>
          </div>
        ) : (
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
                            disabled={
                              loadingItemId === item._id &&
                              loadingType === "add"
                            }
                            className={
                              loadingItemId === item._id &&
                              loadingType === "add"
                                ? "loading"
                                : ""
                            }
                          >
                            +
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => removeItemHandler(item)}
                            disabled={
                              loadingItemId === item._id &&
                              loadingType === "remove"
                            }
                            className={
                              loadingItemId === item._id &&
                              loadingType === "remove"
                                ? "loading"
                                : ""
                            }
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
                  <input type="text" placeholder="Country" ref={countryRef} />
                  <input type="text" placeholder="State" ref={stateRef} />
                  <div className="add">
                    <input
                      type="text"
                      placeholder="District"
                      ref={districtRef}
                    />
                    <input
                      type="number"
                      placeholder="Pin Code"
                      ref={pincodeRef}
                    />
                  </div>
                </div>
                <div className="cart-total">
                  <h5>Cart Total</h5>
                  <div className="cart-summary">
                    <div className="subtotal">
                      <div>Cart SubTotal</div>
                      <div>₹{cartTotal}</div>
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
                  <button className="apply" onClick={placeOrderHandler}>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
