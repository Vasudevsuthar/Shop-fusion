import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="footer-part">
        <div className="shop">
          <h4>ShopFusion</h4>
        </div>
        <div className="copyright">
          <span>© 2024 shopfusion - @shopfusion</span>
        </div>
        <div className="social">
          <FaTwitter className="icon" />
          <FaFacebookSquare className="icon" />
          <RiInstagramFill className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </div>
  );
}

export default footer;
