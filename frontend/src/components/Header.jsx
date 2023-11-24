import React, { useEffect, useState } from "react";
import logo from "../Images/logo.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [nameInNavbar, setNameInNavbar] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  console.log(navBarOpen);
  const navbarItemHandleClick = (itemName) => {
    setActiveItem(itemName);
    setNavBarOpen(false);
  };

  const navbarHandleClick = () => {
    setNavBarOpen(!navBarOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
      setNameInNavbar(true);
    } else {
      setNameInNavbar(false);
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const themeTogglerHandleClick = () => {
    setDarkMode(!darkMode);
    const rootHtmlElement = document.querySelector("html");
    if (darkMode) {
      rootHtmlElement.classList.add("dark");
    } else {
      rootHtmlElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex items-center text-newblue justify-between px-[5%] w-full h-20 drop-shadow-lg transition duration-300 dark:text-white  ${
          scrolling
            ? "bg-bgcolor text-white dark:bg-violet-500"
            : "text-newblue"
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-12 rounded-full border-[1px] border-slate-700 dark:border-white"
          />
          <p
            className={`text-2xl font-medium ${
              nameInNavbar ? "block" : "hidden"
            }`}
          >
            Bibek Ghosh
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div
            className={`items-center fixed right-0 py-16 lg:py-0  bg-sky-950 w-full  px-5 top-0 flex-col gap-10 lg:gap-5 lg:flex-row lg:relative lg:flex lg:bg-transparent  ${
              navBarOpen ? "flex  text-white" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center gap-6 font-bold lg:gap-12 lg:flex-row nav-items">
              <li className="flex flex-col items-center">
                <a
                  onClick={() => navbarItemHandleClick("skills")}
                  href="#skills"
                  className={` px-6 py-1 ${
                   navBarOpen && activeItem === "skills"
                      ? "bg-violet-400 rounded-full"
                      : null
                  }`}
                >
                  Skills Acquired
                </a>
                {activeItem === "skills" ? (
                  <div className="absolute h-[6px] bg-orange-300 w-28 top-[51px] dark:bg-white hidden lg:block"></div>
                ) : null}
              </li>
              <li className="flex flex-col items-center">
                <a
                  onClick={() => {
                    navbarItemHandleClick("projects");
                  }}
                  href="#projects"
                  className={`px-6 py-1 ${
                    navBarOpen && activeItem === "projects"
                      ? "bg-violet-400  rounded-full"
                      : null
                  }`}
                >
                  My Projects
                </a>
                {activeItem === "projects" ? (
                  <div className="absolute h-[6px] bg-orange-300 w-24 top-[51px] hidden lg:block"></div>
                ) : null}
              </li>
              <li className="flex flex-col items-center">
                <a
                  onClick={() => {
                    navbarItemHandleClick("github");
                  }}
                  href="#github"
                  className={`px-6 py-1 ${
                    navBarOpen &&  activeItem === "github"
                      ? "bg-violet-400  rounded-full"
                      : null
                  }`}
                >
                  GitHub
                </a>
                {activeItem === "github" ? (
                  <div className="absolute h-[6px] bg-orange-300 w-16 top-[51px] hidden lg:block"></div>
                ) : null}
              </li>
            </ul>
            {/* <Link to="/account">
              <button className="loginbtn">Login</button>
            </Link> */}
            <div className="flex items-center gap-6 ">
              <div className="w-[0.5px] h-7 bg-newblue dark:bg-white hidden lg:block"></div>
              <a
                className="text-lg hover:scale-110"
                href="https://www.linkedin.com/in/bibekghoshh/"
                target="black"
              >
                <BsLinkedin />
              </a>
              <a
                className="text-lg hover:scale-110"
                href="https://github.com/bibekghoshh"
                target="black"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <div className={` flex items-center gap-5 ${navBarOpen?'text-white':null} `}>
            <button
              className="text-xl hover:scale-110"
              onClick={themeTogglerHandleClick}
            >
              <MdLightMode />
            </button>
            <button
              className="z-50 text-3xl lg:hidden"
              onClick={navbarHandleClick}
            >
              {" "}
              {navBarOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
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
