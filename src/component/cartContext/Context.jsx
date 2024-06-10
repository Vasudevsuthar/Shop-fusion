import React from "react";

const Context = React.createContext({
  items: [],
  addItem: (prod) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  clearCartFromBackend: (email) => {},
});

export default Context;
