import React from "react";
import { Typography } from "@mui/material";
import TimeLine from "./TimeLine";
import myPhoto from "../Images/mypic.jpg";
import YoutubeCard from "./YoutubeCard/YoutubeCard";
import Skills from "./Skills/Skills";
// import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";

const Home = ({ timelines, youtubes, skills }) => {
  return (
    <section className="mt-40  flex flex-col items-center">
      <section className="flex w-[95%]  justify-center mb-20 gap-20" id="home">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="text-xl">
            <p>Hi, my name is</p>
            <h1 className="text-7xl font-roboto text-newblue">Bibek Ghosh</h1>
            <h2>
              An aspiring <span className="role">Software developer</span>{" "}
            </h2>
          </div>
          <p className="w-4/5 text-slate-400 my-2">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
          <div>
            <p>+917478828907</p>
            {/* <p>bibek7478@gmail.com</p> */}
          </div>
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
            // src="https://images.pexels.com/photos/19088938/pexels-photo-19088938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="bibek's phot"
            className="myphoto w-[400px] rounded-full"
          />
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-8 mb-12">
          <button className="bg-newblue text-white px-4 py-2 rounded-md font-medium hover:scale-105 transition duration-300">
            <a href="https://drive.google.com/file/d/1il1CfXN7Tosvghi5pytvmjj3LGEy7Ayn/view?usp=share_link">
              View Resume
            </a>
          </button>
      </div>

      <div className="home">
        <TimeLine timelines={timelines} />

        <Skills skills={skills} />

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
