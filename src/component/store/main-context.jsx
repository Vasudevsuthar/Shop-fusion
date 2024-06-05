// main-context.jsx
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-context";

const MainContext = React.createContext({
  userData: [],
  usersData: [],
  productData: [],
  fetchUserData: (userId) => {},
  fetchUsersData: () => {},
  fetchProductData: () => {},
});

export const MainContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const authCtx = useContext(AuthContext);
  const userId = authCtx.uid;

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const fetchUserData = async () => {
    if (userId) {
      try {
        const response = await fetch(
          `https://shop-fushion-default-rtdb.firebaseio.com/usersData/${userId}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
      console.log(transformedData);
      setUsersData(transformedData);
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

  const contextValue = {
    userData: userData,
    productData: productData,
    usersData: usersData,
    fetchUserData: fetchUserData,
    fetchUsersData: fetchUsersData,
    fetchProductData: fetchProductData,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
