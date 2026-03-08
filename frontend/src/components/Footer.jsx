import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { SlCallOut } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16 surface-2 dark:bg-slate-900 dark:text-white px-4 sm:px-6">
      <div className="text-center" data-aos="fade-up">
        <p className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white text-display">
          Let's Build Something Great
        </p>
        <div className="w-40 h-[3px] bg-emerald-400 mx-auto mt-3"></div>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
          Open to full-time roles, freelance projects, and collaborations.
        </p>
      </div>

      <div className="border-gradient w-[90vw] max-w-3xl" data-aos="fade-up" data-aos-delay="120">
        <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row items-center justify-between px-4 sm:px-6 py-6 surface rounded-3xl dark:bg-slate-800">
          <a className="flex items-center gap-3" href="tel:+917478828907">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
              <SlCallOut />
            </span>
            <p className="font-medium text-slate-700 dark:text-slate-200">
              +917478828907
            </p>
          </a>
          <a className="flex items-center gap-3" href="mailto:bibek7478@gmail.com">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/20 dark:text-amber-300">
              <SiGmail />
            </span>
            <p className="font-medium text-slate-700 dark:text-slate-200">
              bibek7478@gmail.com
            </p>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-wrap gap-6 text-2xl sm:text-3xl justify-center">
          <a
            className="transition duration-300 hover:scale-110 text-slate-600 hover:text-slate-900 dark:text-slate-300"
            href="https://github.com/bibekghoshh"
            target="black"
          >
            <BsGithub />
          </a>
          <a
            className="transition duration-300 hover:text-blue-600 hover:scale-110 text-slate-600 dark:text-slate-300"
            href="https://www.linkedin.com/in/bibekghoshh/"
            target="black"
          >
            <BsLinkedin />
          </a>
          <a
            className="transition duration-300 hover:text-sky-500 hover:scale-110 text-slate-600 dark:text-slate-300"
            href="https://twitter.com/bibekghoshh"
            target="black"
          >
            <BsTwitter />
          </a>
          <a
            className="transition duration-300 hover:text-gray-700 hover:scale-110 text-slate-600 dark:text-slate-300"
            href="https://leetcode.com/bibekghosh/"
            target="black"
          >
            <SiLeetcode />
          </a>
          <a
            className="transition duration-300 hover:text-red-500 hover:scale-110 text-slate-600 dark:text-slate-300"
            href="https://www.instagram.com/bibekghoshh/"
            target="black"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
          (c) {new Date().getFullYear()} Bibek Ghosh • Crafted with React & Tailwind
        </div>
      </div>
    </div>
  );
};

export default Footer;
