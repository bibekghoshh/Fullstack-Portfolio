import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [nameInNavbar, setNameInNavbar] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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
        className={`fixed top-0 z-50 flex items-center justify-between w-screen lg:h-20 h-16 px-3 sm:px-6 lg:px-[12%] transition duration-300 ${
          scrolling
            ? "glass text-slate-900 dark:text-white"
            : "text-slate-800 dark:text-white"
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src="https://images.pexels.com/photos/36244506/pexels-photo-36244506.png?auto=compress&cs=tinysrgb&h=100"
            alt="logo"
            className="w-11 rounded-2xl border-[1px] border-slate-300 dark:border-slate-600"
          />
          <p
            className={`text-xl font-semibold text-display ${
              nameInNavbar ? "block" : "hidden"
            }`}
          >
            Bibek Ghosh
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div
            className={`items-center fixed right-0 py-20 lg:py-0 w-full px-6 top-0 flex-col gap-10 lg:gap-1 lg:flex-row lg:relative lg:flex lg:bg-transparent ${
              navBarOpen ? "flex" : "hidden"
            } ${navBarOpen ? "bg-slate-900/95 text-white max-h-screen overflow-y-auto" : ""}`}
          >
            <ul className="flex flex-col items-center gap-6 font-semibold lg:gap-2 lg:flex-row nav-items">
              <li className="flex flex-col items-center">
                <a
                  onClick={() => navbarItemHandleClick("skills")}
                  href="#skills"
                  className={`px-6 py-2 rounded-full transition ${
                    navBarOpen && activeItem === "skills"
                      ? "bg-emerald-500 text-white"
                      : "hover:bg-emerald-500/10"
                  }`}
                >
                  Skills Acquired
                </a>
                {activeItem === "skills" ? (
                  <div className="absolute h-[4px] bg-emerald-400 w-28 top-[50px] hidden lg:block"></div>
                ) : null}
              </li>
              <li className="flex flex-col items-center">
                <a
                  onClick={() => {
                    navbarItemHandleClick("projects");
                  }}
                  href="#projects"
                  className={`px-6 py-2 rounded-full transition ${
                    navBarOpen && activeItem === "projects"
                      ? "bg-emerald-500 text-white"
                      : "hover:bg-emerald-500/10"
                  }`}
                >
                  My Projects
                </a>
                {activeItem === "projects" ? (
                  <div className="absolute h-[4px] bg-emerald-400 w-24 top-[50px] hidden lg:block"></div>
                ) : null}
              </li>
              <li className="flex flex-col items-center">
                <a
                  onClick={() => {
                    navbarItemHandleClick("github");
                  }}
                  href="#github"
                  className={`px-6 py-2 rounded-full transition ${
                    navBarOpen && activeItem === "github"
                      ? "bg-emerald-500 text-white"
                      : "hover:bg-emerald-500/10"
                  }`}
                >
                  GitHub
                </a>
                {activeItem === "github" ? (
                  <div className="absolute h-[4px] bg-emerald-400 w-16 top-[50px] hidden lg:block"></div>
                ) : null}
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <div className="w-[1px] h-7 bg-slate-300 dark:bg-slate-600 hidden lg:block"></div>
              <a
                className="text-lg hover:scale-110 transition"
                href="https://www.linkedin.com/in/bibekghoshh/"
                target="black"
              >
                <BsLinkedin />
              </a>
              <a
                className="text-lg hover:scale-110 transition"
                href="https://github.com/bibekghoshh"
                target="black"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <div className={`flex items-center gap-5 ${navBarOpen ? "text-white" : ""}`}>
            <button
              className="text-xl hover:scale-110 transition"
              onClick={themeTogglerHandleClick}
            >
              {darkMode ? <MdNightlight /> : <MdLightMode />}
            </button>
            <button
              className="z-50 text-3xl lg:hidden"
              onClick={navbarHandleClick}
            >
              {navBarOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
