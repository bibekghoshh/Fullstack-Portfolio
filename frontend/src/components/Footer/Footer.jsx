import { Typography } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { SlCallOut } from "react-icons/sl";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, My name is Bibek Ghosh. I am learning MERN stack and looking for
          oppertunity to enhance my skills to solve real world problems
        </Typography>

        {/* <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link> */}
        <div className="footer-icons">
          <a className="mail-icon" href="mailto:bibek7478@gmail.com">
            <SiGmail />
          </a>
          <a className="call-icon" href="tel:+917478828907">
            <SlCallOut />
          </a>
        </div>
      </div>
      <div>
        <a href="https://github.com/bibekghoshh" target="black">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/bibekghoshh/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/bibekghoshh" target="black">
          <BsTwitter />
        </a>
        <a href="https://leetcode.com/bibekghosh/" target="black">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/bibekghoshh/" target="black">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
