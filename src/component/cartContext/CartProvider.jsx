import { useContext, useEffect, useState } from "react";
import CartContext from "./Context";
import AuthContext from "../store/auth-context";
import toast from "react-hot-toast";

const CartContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const cleanedEmail = email.replace(/[@.]/g, "");

  const [items, setItems] = useState([]);

  const addToCart = async (product) => {
    try {
      const updatedItemsArray = [...items];
      const existingItemIndex = updatedItemsArray.findIndex(
        (existingItem) => existingItem.name === product.name
      );

      if (existingItemIndex !== -1) {
        updatedItemsArray[existingItemIndex].quantity += Number(
          product.quantity
        );

        try {
          const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id;
          const updatedItem = {
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: updatedItemsArray[existingItemIndex].quantity,
          };
          const response = await fetch(
            `https://shop-fushion-default-rtdb.firebaseio.com/cart/${cleanedEmail}/${itemIdToUpdate}.json`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedItem),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to update product in cart.");
          }
          toast.success("Product Add to cart successfully");
          fetchCartData();
        } catch (error) {
          console.error("Error updating item:", error);
        }
      } else {
        const response = await fetch(
          `https://shop-fushion-default-rtdb.firebaseio.com/cart/${cleanedEmail}.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to add product to cart.");
        }
        updatedItemsArray.splice(existingItemIndex, 1);
        toast.success("Product Add to cart successfully");
        fetchCartData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeToCart = async (product) => {
    try {
      const updatedItemsArray = [...items];
      const existingItemIndex = updatedItemsArray.findIndex(
        (existingItem) => existingItem._id === product._id
      );

      if (existingItemIndex !== -1) {
        if (updatedItemsArray[existingItemIndex].quantity > 1) {
          updatedItemsArray[existingItemIndex].quantity -= 1;

          try {
            const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id;
            const updatedItem = {
              name: product.name,
              image: product.image,
              price: product.price,
              quantity: updatedItemsArray[existingItemIndex].quantity,
            };
            const response = await fetch(
              `https://shop-fushion-default-rtdb.firebaseio.com/cart/${cleanedEmail}/${itemIdToUpdate}.json`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedItem),
              }
            );
            if (!response.ok) {
              throw new Error("Failed to update product in cart.");
            }
            toast.success("Product removed from cart successfully");
            fetchCartData();
          } catch (error) {
            console.error("Error updating item:", error);
          }
        } else {
          const itemIdToDelete = updatedItemsArray[existingItemIndex]._id;
          const response = await fetch(
            `https://shop-fushion-default-rtdb.firebaseio.com/cart/${cleanedEmail}/${itemIdToDelete}.json`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) {
            throw new Error("Failed to remove product from cart.");
          }
          toast.success("Product removed from cart successfully");
          fetchCartData();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCartData = async () => {
    try {
      const response = await fetch(
        `https://shop-fushion-default-rtdb.firebaseio.com/cart/${cleanedEmail}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart data.");
      }
      const data = await response.json();
      if (data) {
        const itemArray = Object.entries(data).map(([id, item]) => ({
          _id: id,
          ...item,
        }));
        setItems(itemArray);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [cleanedEmail]);

  const contextValue = {
    items: items,
    addItem: addToCart,
    removeItem: removeToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
