import React from "react";
import "./Header.css";
import logo from "../../Images/logo.jpg";
import menuIcon from "../../Images/menu.png";

const Header = () => {
  return (
    <>
      <header class="nav">
        <div class="nav-logo">
          <img src={logo} alt="logo" class="logo" />
        </div>

        <div class="nav-item">
          <ul class="nav-items">
            <a href="/">Home</a>
          </ul>
          <ul class="nav-items">
            <a href="/projects">Projects</a>
          </ul>
          <ul class="nav-items">
            <a href="/contact">Contact us</a>
          </ul>
          <button class="loginbtn">
            <a href="/account">Login</a>
          </button>
        </div>
        <div class="menu-item">
          <img src={menuIcon} alt="menu-icon" class="menu-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
