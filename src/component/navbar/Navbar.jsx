import React from "react";
import logo from "../img/logo.avif";
import Profile from "../profile/Profile";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
