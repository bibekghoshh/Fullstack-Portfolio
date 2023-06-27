import React from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import myPhoto from "../../Images/mypic.jpg";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Skills from "../Skills/Skills";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

// import { Link } from "react-router-dom";

const Home = ({ timelines, youtubes, skills }) => {
  
  
  return (
    <section className="home-page">
      <section className="container" id="home">
        <div className="col col1">
          <div className="intro1">
            <h1>👋Hey,I am Bibek Ghosh</h1>
          </div>
          <div className="intro2">
            <h2>An aspiring <span className="role">Software developer</span> </h2>
          </div>
          <p className="intro">
            I enjoy challenges and finding a solution to a problem always
            fascinates me. I explore new technological areas as an avid learner
            to make a difference. A quick learner with strong coding and
            communication skills is also my strength. My goal is to gain
            exposure to domains that provide intellectually challenging work in
            the field of computers so that I can improve and broaden my
            knowledge and skills.
          </p>
          <p className="intro3">I WRITE CODE</p>
          <div className="viewcv">
            <button className="viewcvbtn">
              <a href="https://drive.google.com/file/d/1il1CfXN7Tosvghi5pytvmjj3LGEy7Ayn/view?usp=share_link">
                View Resume
              </a>
            </button>
          </div>
          <div className="social-media">
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
          {/* <Link to="/projects">VIEW WORK</Link> */}
        </div>
        <div className="col col2">
          <img
            src={myPhoto}
            alt="bibek's phot"
            className="myphoto"
          />
        </div>
      </section>

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