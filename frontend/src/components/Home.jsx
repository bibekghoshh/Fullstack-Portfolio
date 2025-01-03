import React, { Suspense, lazy } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import TimeLineShimmer from "./ShimmerUi/TimelineShimmer";
import { projects, timeline } from "../Data/Data";
import resume from "../Assets/resume.pdf"

const TimeLine = lazy(() => import("./TimeLine"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./ProjectCard"));
const GitHub = lazy(() => import("./GitHub"));


const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };


  return (
    <section className="flex flex-col items-center pt-20 lg:pt-40 dark:bg-slate-800 dark:text-white">
      <section
        className="flex w-[95%] justify-center lg:mb-20 mb-10 lg:gap-5 gap-8 flex-col-reverse items-center lg:flex-row"
        id="home"
      >
        <div className="flex flex-col gap-5 lg:w-1/2 w-[95%] items-center lg:items-start ">
          <div className="flex flex-col items-center gap-2 text-xl lg:items-start">
            <p className="text-sm font-medium lg:text-lg text-slate-700 dark:text-slate-400">
              Hi, my name is
            </p>
            <h1 className="text-4xl font-medium lg:text-7xl font-roboto text-newblue dark:text-white">
              Bibek Ghosh
            </h1>
            <h2>
              An <span className="text-2xl font-semibold text-blue-500">Frontend developer</span>{" "}
            </h2>
          </div>
          <p className="my-2 text-center lg:w-4/5 text-slate-400 lg:text-start">
            {/* I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :) */}
            I’m a passionate frontend developer with hands-on experience in
            modern web technologies. Having completed a full-stack JavaScript
            bootcamp, I’m constantly learning and refining my skills. I enjoy
            solving complex web development problems, creating seamless user
            experiences. Currently seeking frontend development opportunities to
            apply my knowledge and grow professionally.
            {/* I love to Dig and Explore Fundamental Engineering concepts around the WEB by listening to conferences, podcasts and reading articles over the internet. */}
          </p>

          <div className="bg-bgcolor dark:bg-violet-500 flex rounded-3xl text-white gap-5 w-[95vw] lg:w-[500px] h-24 items-center justify-around px-5">
            <div className="text-center">
              <p className="text-3xl font-bold lg:text-5xl font-roboto">8</p>
              <p className="font-medium lg:text-xs text-[8px]">
                VERIFIED SKILLS
              </p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24 hidden lg:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold lg:text-5xl font-roboto">{5}</p>
              <p className="font-medium lg:text-xs text-[8px]">
                PROFESSIONAL PROJECTS
              </p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24 hidden lg:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold lg:text-5xl font-roboto">120+</p>
              <p className="font-medium lg:text-xs text-[8px]">
                DSA PROBLEMS SOLVED
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            // src="https://images.pexels.com/photos/19088938/pexels-photo-19088938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/28587367/pexels-photo-28587367.png"
            alt="bibek's img"
            className=" lg:w-[400px] rounded-full w-48"
          />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-8 mb-12">
        <button className="px-4 py-2 font-medium text-white transition duration-300 rounded-md bg-newblue hover:scale-105 dark:bg-violet-500 animate-bounce">
          <a
            // href="https://drive.google.com/file/d/1MQRJFNBx1t6fuiUEO6uu6YTagHKJPEYq/view?usp=drive_link"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </button>
      </div>

      <div className="fixed z-50 flex flex-col gap-2 text-3xl bottom-4 right-4 text-bgcolor dark:text-violet-500">
        <div onClick={scrollToTop}>
          <FaArrowCircleUp />
        </div>
        <div onClick={scrollToBottom}>
          <FaArrowCircleDown />
        </div>
      </div>

      <div>
        <Suspense fallback={<TimeLineShimmer />}>
          <TimeLine timelines={timeline} />{" "}
        </Suspense>

        <Suspense fallback={<div>Skills are loading</div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div>Project is loading</div>}>
          <Projects projects={projects} />
        </Suspense>

        <Suspense fallback={<div>loading</div>}>
          <GitHub />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
