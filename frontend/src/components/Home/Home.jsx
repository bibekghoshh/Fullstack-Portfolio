import React from "react";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import myPhoto from "../../Images/mypic.jpg";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Skills from "../Skills/Skills";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Home = ({ timelines, youtubes, skills }) => {
  return (
    <section className="mt-40 border-4 border-green-500 flex flex-col items-center">
      <section
        className="flex w-[95%]  justify-center mb-10 gap-20"
        id="home"
      >
        <div className="w-1/2 flex flex-col gap-5">
          <div className="text-xl">
            <p>Hi, my name is</p>
            <h1 className="text-7xl font-roboto">Bibek Ghosh</h1>
            <h2>
              An aspiring <span className="role">Software developer</span>{" "}
            </h2>
          </div>
          <p className="w-4/5 text-slate-400 my-2">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>

          <div className="bg-bgcolor flex rounded-3xl text-white gap-5 w-[500px] h-24 items-center justify-center px-5">
            <div className="text-center">
              <p className="text-5xl font-bold font-roboto">12</p>
              <p className="text-xs font-medium">VERIFIED SKILLS</p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24"></div>
            <div className="text-center">
              <p className="text-5xl font-bold font-roboto">7</p>
              <p className="text-xs font-medium">PROFESSIONAL PROJECTS</p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24"></div>
            <div className="text-center">
              <p className="text-5xl font-bold font-roboto">200+</p>
              <p className="text-xs font-medium">DSA PROBLEMS SOLVED</p>
            </div>
          </div>
        </div>
        <div className="col col2 ">
          <img
            src={myPhoto}
            alt="bibek's phot"
            className="myphoto w-[400px] rounded-full"
          />
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-8 mb-12">
        <div className="flex gap-6 text-4xl">
          <a className="hover:scale-110 transition duration-300 " href="https://github.com/bibekghoshh" target="black">
            <BsGithub />
          </a>
          <a className="hover:text-blue-600 hover:scale-110 transition duration-300" href="https://www.linkedin.com/in/bibekghoshh/" target="black">
            <BsLinkedin />
          </a>
          <a className="hover:text-sky-500 hover:scale-110 transition duration-300" href="https://twitter.com/bibekghoshh" target="black">
            <BsTwitter />
          </a>
          <a className="hover:text-gray-500 hover:scale-110 transition duration-300" href="https://leetcode.com/bibekghosh/" target="black">
            <SiLeetcode />
          </a>
          <a className="hover:text-red-500 hover:scale-110 transition duration-300" href="https://www.instagram.com/bibekghoshh/" target="black">
            <BsInstagram />
          </a>
        </div>
        <div>
          <button className="bg-newblue text-white px-4 py-2 rounded-md font-medium hover:scale-105 transition duration-300">
            <a href="https://drive.google.com/file/d/1il1CfXN7Tosvghi5pytvmjj3LGEy7Ayn/view?usp=share_link">
              View Resume
            </a>
          </button>
        </div>
      </div>

      <div className="home">
        <div className="homeContainer">
          <Typography variant="h3">TIMELINE</Typography>
          <TimeLine timelines={timelines} />
        </div>

        <div className="homeSkills">
          <Typography variant="h3">SKILLS</Typography>

          <Skills skills={skills} />
        </div>

        <div className="homeYoutube">
          <Typography variant="h3">VIDEOS</Typography>

          <div className="homeYoutubeWrapper">
            {youtubes.map((item) => (
              <YoutubeCard
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
