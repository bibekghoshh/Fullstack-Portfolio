import React from 'react';
import "./Header.css";
import logo from "../../Images/logo.jpg";
import menuIcon from "../../Images/menu.png";
// import {ReactNavbar} from "overlay-navbar";
// import logo from "../../Images/logo.jpeg";
// import {FaUserAlt} from 'react-icons/fa';

const Header = () => {
  return (
    // <ReactNavbar
    
    // navColor1="white"
    // navColor2="hsl(219, 48%, 8%)"
    // burgerColor="hsl(250, 100%, 75%)"
    // burgerColorHover="hsl(250, 100%, 75%)"
    // logo={logo}
    // logoWidth="150px"
    // logoHoverColor="hsl(250, 100%, 75%)"
    // nav2justifyContent="space-around"
    // nav3justifyContent="space-around"
    // link1Text="Home"
    // link2Text="About"
    // link3Text="Projects"
    // link4Text="Contact"
    // link1Url="/"
    // link2Url="/about"
    // link3Url="/projects"
    // link4Url="/contact"
    // linkColorHover="white"
    // link1Color="HSL(250, 100%, 75%)"
    // link1Size="1.5rem"
    // link1Padding="3vmax"
    // profileIcon={true}
    // ProfileIconElement={FaUserAlt}
    // profileIconColor="HSL(250, 100%, 75%)"
    // profileIconColorHover="white"
    
    // />
    <>
    <header class="nav">
            <div class="nav-logo">
                  <img src={logo} alt="logo" class="logo"/>
            </div>
        
        <div class="nav-item">
            <ul class="nav-items"><a href="/">Home</a></ul>
            <ul class="nav-items"><a href="/projects">Projects</a></ul>
            <ul class="nav-items"><a href="/contact">Contact us</a></ul>
            <button class="loginbtn"><a href="/account">Login</a></button>
        </div>
        <div class="menu-item">
            <img src={menuIcon} alt="menu-icon" class="menu-icon"/>
        </div>
    </header>
    
    </>
  )
};

export default Header;