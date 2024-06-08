import React from "react";

const Context = React.createContext({
  items: [],
  addItem: (prod) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default Context;
