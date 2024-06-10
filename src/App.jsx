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
import CategoryPage from "./page/category/CategoryPage";
import { Toaster } from "react-hot-toast";
import CartContextProvider from "./component/cartContext/CartProvider";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";

const App = () => {
  return (
    <div className="app">
      <Router>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/userDashboard"
              element={
                <ProtectedRouteForUser>
                  <Account />
                </ProtectedRouteForUser>
              }
            />
            <Route path="/singleprod/:productid" element={<SingleProduct />} />
            <Route path="/order" element={<OrderPage />} />
            <Route
              path="/adminDashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
          </Routes>
          <Toaster />
        </CartContextProvider>
      </Router>
    </div>
  );
};

export default App;
