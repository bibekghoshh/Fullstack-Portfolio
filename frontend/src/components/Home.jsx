import React from "react";
import TimeLine from "./TimeLine";
import myPhoto from "../Images/mypic.jpg";
// import YoutubeCard from "./YoutubeCard/YoutubeCard";
import Skills from "./Skills";
import Projects from "./Projects/ProjectCard";
import {FaArrowCircleUp,FaArrowCircleDown} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

const Home = ({ timelines, youtubes, skills, projects}) => {

  const scrollToTop=()=>{
    scroll.scrollToTop();
  }
  const scrollToBottom=()=>{
    scroll.scrollToBottom();
  }
  
  return (
    <section className="flex flex-col items-center mt-40">
      <section className="flex w-[95%]  justify-center mb-20 gap-20" id="home">
        <div className="flex flex-col w-1/2 gap-5">
          <div className="text-xl">
            <p>Hi, my name is</p>
            <h1 className="text-7xl font-roboto text-newblue">Bibek Ghosh</h1>
            <h2>
              An aspiring <span className="role">Software developer</span>{" "}
            </h2>
          </div>
          <p className="w-4/5 my-2 text-slate-400">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
          <div>
            <p>+917478828907</p>
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

      <div className="flex flex-col items-center justify-center gap-8 mb-12">
          <button className="px-4 py-2 font-medium text-white transition duration-300 rounded-md bg-newblue hover:scale-105">
            <a href="https://drive.google.com/file/d/1il1CfXN7Tosvghi5pytvmjj3LGEy7Ayn/view?usp=share_link">
              View Resume
            </a>
          </button>
      </div>

      <div className="fixed flex flex-col gap-2 text-2xl bottom-4 right-5 text-bgcolor">
        <div onClick={scrollToTop}><FaArrowCircleUp/></div>
        <div onClick={scrollToBottom}><FaArrowCircleDown/></div>
      </div>

      <div className="home">
        <TimeLine timelines={timelines} />

        <Skills skills={skills} />

        <Projects projects={projects}/>

        {/* <div className="homeYoutube">
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
        </div> */}
      </div>
    </section>
  );
};

export default Home;
