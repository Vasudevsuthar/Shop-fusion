import React, { useContext } from "react";
import logo from "../img/logo.avif";
import Profile from "../profile/Profile";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import CartContext from "../cartContext/Context";

function Navbar() {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext)
  const cartItems = cartCtx.items;
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo" onClick={() => navigate("/")}>
            <img className="logoimg" src={logo} alt="Logo" />
            <h3 className="heading">Shop Fusion</h3>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="profile">
              <Profile className="acc" />
              <MdOutlineShoppingCart className="cart" onClick={() => navigate("/cart")}/>
                <div className="cart-item">
                <span>{cartItems.length}</span>
                </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
