import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";

const MainContext = React.createContext({
  userData: [],
  usersData: [],
  productData: [],
  orderData: [],
  orderDataForUser: [],
  fetchUsersData: () => {},
  fetchProductData: () => {},
  findUserDataByEmail: (email) => {},
  fetchOrderDataForUser: () => {},
});

export const MainContextProvider = (props) => {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : {};
  });
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const [productData, setProductData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [orderDataForUser, setOrderDataForUser] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await fetch(
        "https://shop-fushion-default-rtdb.firebaseio.com/usersData.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      const transformedData = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setUsersData(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      const response = await fetch(
        "https://shop-fushion-default-rtdb.firebaseio.com/orders.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      const transformedData = [];

      Object.keys(data).forEach((cleanedEmail) => {
        Object.keys(data[cleanedEmail]).forEach((id) => {
          transformedData.push({
            orderId: id,
            ...data[cleanedEmail][id],
          });
        });
      });
      setOrderData(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderDataForUser();
  }, []);

  const fetchOrderDataForUser = async () => {
    const cleanedEmail = email.replace(/[@.]/g, "");
    try {
      const response = await fetch(
        `https://shop-fushion-default-rtdb.firebaseio.com/orders/${cleanedEmail}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      if (!data) {
        setOrderDataForUser([]);
        return;
      }
      const transformedData = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setOrderDataForUser(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch(
        "https://shop-fushion-default-rtdb.firebaseio.com/productData.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      const transformedData = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setProductData(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      findUserDataByEmail(email);
    }
  }, [usersData]);

  const findUserDataByEmail = (email) => {
    const user = usersData.find((user) => user.email === email);
    if (user) {
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
    }
  };

  const contextValue = {
    userData: userData,
    productData: productData,
    usersData: usersData,
    orderData: orderData,
    orderDataForUser: orderDataForUser,
    findUserDataByEmail: findUserDataByEmail,
    fetchUsersData: fetchUsersData,
    fetchProductData: fetchProductData,
    fetchOrderDataForUser: fetchOrderDataForUser,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
