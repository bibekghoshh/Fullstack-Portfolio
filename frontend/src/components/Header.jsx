import React, { useState } from "react";
// import "./Header.css";
import logo from "../Images/logo.jpg";
// import menuIcon from "../../Images/menu.png";
// import crossIcon from "../../Images/cross.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setNavBarOpen(false);
  };

  return (
    <>
      <header className="fixed flex justify-around h-20 items-center w-full bg-bgcolor top-0 drop-shadow-lg">
        <div className="nav-logo">
          <img
            src={logo}
            alt="logo"
            className="w-12 rounded-full border-[1px] border-slate-700"
          />
        </div>

        <div>
          <ul className="nav-items flex gap-12 font-bold text-newblue">
            <li>
              <Link to="/" className="" onClick={() => handleItemClick("home")}>
                Skills Acquired
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className=""
                onClick={() => handleItemClick("projects")}
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=""
                onClick={() => handleItemClick("contact")}
              >
                Github
              </Link>
            </li>
          </ul>
          {/* <Link to="/account">
            <button className="loginbtn">Login</button>
          </Link> */}
        </div>
        {/* <button
          className="menu-item"
          onClick={() => setNavBarOpen((prev) => !prev)}
        >
          {navBarOpen ? (
            <img src={crossIcon} alt="menu-icon" className="menu-icon" />
          ) : (
            <img src={menuIcon} alt="menu-icon" className="menu-icon" />
          )}
        </button> */}
      </header>
    </>
  );
};

export default Header;
