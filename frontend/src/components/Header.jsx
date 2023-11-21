import React, {  useEffect, useState } from "react";
import logo from "../Images/logo.jpg";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
// import { Link } from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line
  const [navBarOpen, setNavBarOpen] = useState(false);
  
  const[nameInNavbar,setNameInNavbar]=useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [scrolling, setScrolling]=useState(false);
  const [darkMode,setDarkMode]=useState(true);


  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // setNavBarOpen(false);
  };
  

  const handleScroll=()=>{
    if(window.scrollY>100){
      setScrolling(true);
      setNameInNavbar(true);
    }else{
      setNameInNavbar(false);
      setScrolling(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const themeTogglerHandleClick=()=>{
      setDarkMode(!darkMode);
      const rootHtmlElement=document.querySelector("html");
      if(darkMode){
        rootHtmlElement.classList.add('dark');
      }else{
        rootHtmlElement.classList.remove('dark')
      }
  }

  return (
    <>
      <header className={`fixed top-0 z-50 flex items-center justify-around w-full h-20 drop-shadow-lg transition duration-300 dark:text-white  ${scrolling?'bg-bgcolor text-white dark:bg-violet-500':'text-newblue'}`}>
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-12 rounded-full border-[1px] border-slate-700 dark:border-white"
          />
          <p className={`text-2xl font-medium ${nameInNavbar?'block':'hidden'}`}>Bibek Ghosh</p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-12 font-bold nav-items ">
            <li className="flex flex-col">
              <a onClick={() => handleItemClick("skills")} href="#skills">Skills Acquired</a>
              {activeItem==="skills"?(<div className="absolute h-1 bg-orange-300 w-28 top-[76px] dark:bg-white"></div>):null}

            </li>
            <li>
              <a onClick={()=>{handleItemClick("projects")}} href="#projects" >My Projects</a>
              {activeItem==="projects"?(<div className="absolute h-1 bg-orange-300 w-[90px] top-[76px]"></div>):null}
            </li>
            <li>
            <a onClick={()=>{handleItemClick("github")}} href="#github" >GitHub</a>
              {activeItem==="github"?(<div className="absolute h-1 bg-orange-300 w-[60px] top-[76px]"></div>):null}
            </li>
          </ul>
          {/* <Link to="/account">
            <button className="loginbtn">Login</button>
          </Link> */}
          <div className="flex items-center gap-6">
            <div className="w-[0.5px] h-7 bg-newblue dark:bg-white"></div>
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
        
        <button className="text-xl hover:scale-110" onClick={themeTogglerHandleClick}><MdLightMode/></button>
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
