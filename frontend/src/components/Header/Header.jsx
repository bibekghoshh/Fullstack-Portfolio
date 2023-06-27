import React, { useState } from "react";
import "./Header.css";
import logo from "../../Images/logo.jpg";
import menuIcon from "../../Images/menu.png";
import crossIcon from "../../Images/cross.png";
import { Link } from "react-router-dom";
// import {BiMenu} from 'react-icons/bi';

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setNavBarOpen(false);
  };

  return (
    <>
      <header className="nav">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className={`nav-item ${navBarOpen ? "show-menu" : ""}`}>
          <ul className="nav-items">
            <li>
              <Link
                to="/"
                className={activeItem === "home" ? "active" : ""}
                onClick={() => handleItemClick("home")}
              >
                Home
              </Link>
            </li>
          </ul>
          <ul className="nav-items">
            <li>
              <Link
                to="/projects"
                className={activeItem === "projects" ? "active" : ""}
                onClick={() => handleItemClick("projects")}
              >
                Projects
              </Link>
            </li>
          </ul>
          <ul className="nav-items">
            <li>
              <Link
                to="/contact"
                className={activeItem === "contact" ? "active" : ""}
                onClick={() => handleItemClick("contact")}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <Link to="/account">
            <button className="loginbtn">Login</button>
          </Link>
        </div>
        <button
          className="menu-item"
          onClick={() => setNavBarOpen((prev) => !prev)}
        >
          {navBarOpen ? (
            <img src={crossIcon} alt="menu-icon" className="menu-icon" />
          ) : (
            <img src={menuIcon} alt="menu-icon" className="menu-icon" />
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
