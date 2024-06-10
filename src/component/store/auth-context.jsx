import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import Context from "../cartContext/Context";

const AuthContext = React.createContext({
  token: "",
  email: "",
  uid: "",
  isLoggedIn: false,
  login: (token, email, uid) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  let initialEmail = localStorage.getItem("email");
  let initialUid = localStorage.getItem("uid");
  const cartCtx = useContext(Context);

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [uid, setUid] = useState(initialUid);

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("uid", uid);
  }, [token, email, uid]);

  function loginHandler(token, email) {
    setToken(token);
    setEmail(email);
  }

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    setUid(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("uid");
    localStorage.removeItem("userData");
    cartCtx.clearCart();
    setToken("");
    setEmail("");
    setUid("");
    toast.success("You have been logged out.");
  };

  const contextValue = {
    token: token,
    email: email,
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
