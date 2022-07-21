import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Header;
