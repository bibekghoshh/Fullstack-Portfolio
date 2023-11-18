import React, {  useEffect, useState } from "react";
import logo from "../Images/logo.jpg";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
// import menuIcon from "../../Images/menu.png";
// import crossIcon from "../../Images/cross.png";
// import { Link } from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line
  const [navBarOpen, setNavBarOpen] = useState(false);
  // eslint-disable-next-line
  const [activeItem, setActiveItem] = useState("home");
  
  const [scrolling, setScrolling]=useState(false);
  // const [darkMode,setDarkMode]=useState(false);

  // eslint-disable-next-line
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setNavBarOpen(false);
  };
  
  const handleScroll=()=>{
    if(window.scrollY>100){
      setScrolling(true);
    }else{
      setScrolling(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
      <header className={`fixed top-0 z-50 flex items-center justify-around w-full h-20 drop-shadow-lg transition duration-300 ${scrolling?'bg-bgcolor text-white':'text-newblue'}`}>
        <div className="nav-logo">
          <img
            src={logo}
            alt="logo"
            className="w-12 rounded-full border-[1px] border-slate-700"
          />
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-12 font-bold nav-items ">
            <li>
              <a href="#skills">Skills Acquired</a>
              {/* <Link to="/" className="" onClick={() => handleItemClick("home")}>
                Skills Acquired
              </Link> */}
            </li>
            <li>
              <a href="#projects" >My Projects</a>
              {/* <Link
                to="/projects"
                className=""
                onClick={() => handleItemClick("projects")}
              >
                My Projects
              </Link> */}
            </li>
            <li>
              <a href="#github">Github</a>
              {/* <Link
                to="/contact"
                className=""
                onClick={() => handleItemClick("contact")}
              >
                Github
              </Link> */}
            </li>
          </ul>
          {/* <Link to="/account">
            <button className="loginbtn">Login</button>
          </Link> */}
          <div className="flex items-center gap-5">
            <div className="w-[0.5px] h-7 bg-newblue"></div>
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
        
        <button className="text-xl hover:scale-110"><MdLightMode/></button>
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
