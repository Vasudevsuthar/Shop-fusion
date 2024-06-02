import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./component/store/auth-context.jsx";
import { MainContextProvider } from "./component/store/main-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
