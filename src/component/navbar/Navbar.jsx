import React from "react";
import logo from "../img/logo.avif";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";

function navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img className="logoimg" src={logo} alt="" />
            <h3 className="heading">Shop Fusion</h3>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="profile">
            <div className="acc">
              <MdOutlineAccountCircle />
            </div>
            <div className="cart">
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
