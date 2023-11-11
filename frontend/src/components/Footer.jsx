import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { SlCallOut } from "react-icons/sl";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-96 gap-5 bg-slate-200">
      <p className="text-3xl text-newblue font-medium">Get in touch</p>
      <div className="w-[80%] h-[3px] bg-bgcolor"></div>
      <div className="flex  gap-12">
        <a className="flex items-center gap-2" href="tel:+917478828907">
          <SlCallOut className="text-2xl" />
          <p className="font-medium text-slate-600">+917478828907</p>
        </a>
        <a
          className="flex items-center gap-2"
          href="mailto:bibek7478@gmail.com"
        >
          <SiGmail className="text-2xl" />
          <p className="font-medium text-slate-600">bibek7478@gmail.com</p>
        </a>
      </div>
      <div className="flex gap-6 text-4xl mt-2">
        <a
          className="hover:scale-110 transition duration-300 hover:text-sky-900"
          href="https://github.com/bibekghoshh"
          target="black"
        >
          <BsGithub />
        </a>
        <a
          className="hover:text-blue-600 hover:scale-110 transition duration-300"
          href="https://www.linkedin.com/in/bibekghoshh/"
          target="black"
        >
          <BsLinkedin />
        </a>
        <a
          className="hover:text-sky-500 hover:scale-110 transition duration-300"
          href="https://twitter.com/bibekghoshh"
          target="black"
        >
          <BsTwitter />
        </a>
        <a
          className="hover:text-gray-500 hover:scale-110 transition duration-300"
          href="https://leetcode.com/bibekghosh/"
          target="black"
        >
          <SiLeetcode />
        </a>
        <a
          className="hover:text-red-500 hover:scale-110 transition duration-300"
          href="https://www.instagram.com/bibekghoshh/"
          target="black"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
