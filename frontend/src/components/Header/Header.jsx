import React, { useState } from "react";
import "./Header.css";
import logo from "../../Images/logo.jpg";
import menuIcon from "../../Images/menu.png";
import crossIcon from "../../Images/cross.png";
// import {BiMenu} from 'react-icons/bi';

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <>
      <header class="nav">
        <div class="nav-logo">
          <img src={logo} alt="logo" class="logo" />
        </div>

        <div class={`nav-item ${navBarOpen ? 'show-menu' : ''}`} >
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
        <button class="menu-item" onClick={()=> setNavBarOpen((prev)=> !prev)}>
          {navBarOpen? (
            <img src={crossIcon} alt="menu-icon" class="menu-icon" />
            ):(
              <img src={menuIcon} alt="menu-icon" class="menu-icon" />
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
