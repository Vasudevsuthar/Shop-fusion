import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import "./App.css";
import Login from "./component/registration/Login";
import Signup from "./component/registration/Signup";
import Cart from "./page/cart/Cart";
import Account from "./page/account/Account";
import SingleProduct from "./page/singleProduct/SingleProduct";
import OrderPage from "./page/orderPage/OrderPage";
import AdminDashboard from "./page/adminDashboard/AdminDashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/singleprod" element={<SingleProduct />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Toaster />
        </Router>
    </div>
  );
};

export default App;
