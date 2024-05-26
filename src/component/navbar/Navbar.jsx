import React from "react";
import logo from "../img/logo.avif";
import Profile from "../profile/Profile";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img className="logoimg" src={logo} alt="Logo" />
            <h3 className="heading">Shop Fusion</h3>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="profile">
              <Profile className="acc" />
              <MdOutlineShoppingCart className="cart"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
