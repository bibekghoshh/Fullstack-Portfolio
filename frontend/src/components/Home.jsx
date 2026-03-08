import React, { Suspense, lazy } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import TimeLineShimmer from "./ShimmerUi/TimelineShimmer";
import { projects, timeline } from "../Data/Data";

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
    <section className="flex flex-col items-center pt-20 lg:pt-40 dark:bg-slate-900 dark:text-white">
      <section
        className="flex w-[95%] justify-center lg:mb-20 mb-10 lg:gap-10 gap-8 flex-col-reverse items-center lg:flex-row"
        id="home"
      >
        <div
          className="flex flex-col gap-6 lg:w-1/2 w-[95%] items-center lg:items-start"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-3 text-xl lg:items-start">
            <p className="text-sm font-medium lg:text-lg text-slate-700 dark:text-slate-400">
              Hi, my name is
            </p>
            <h1 className="text-4xl font-semibold lg:text-7xl text-display text-slate-900 dark:text-white">
              Bibek Ghosh
            </h1>
            <h2 className="text-base font-medium text-slate-600 dark:text-slate-300 lg:text-xl">
              A{" "}
              <span className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                Frontend developer
              </span>
            </h2>
          </div>
          <p className="my-2 text-center lg:w-4/5 text-slate-600 lg:text-start dark:text-slate-300">
            I'm a frontend-focused Full Stack Developer who builds fast, scalable, and
            user-centric web applications using React, JavaScript, and modern web
            technologies. I turn complex problems into clean, intuitive interfaces
            and performant systems. Constantly learning, constantly building, focused
            on delivering real-world impact through code.
          </p>

          <div className="border-gradient w-[95vw] lg:w-[520px]">
            <div className="flex rounded-3xl text-slate-900 dark:text-white gap-5 h-24 items-center justify-around px-5 surface dark:bg-slate-800">
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">8</p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  VERIFIED SKILLS
                </p>
              </div>
              <div className="bg-slate-200/70 w-[1px] h-12 hidden lg:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">{5}</p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  PROFESSIONAL PROJECTS
                </p>
              </div>
              <div className="bg-slate-200/70 w-[1px] h-12 hidden lg:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">120+</p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  DSA PROBLEMS SOLVED
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="120">
          <img
            src="https://images.pexels.com/photos/36244506/pexels-photo-36244506.png?auto=compress&cs=tinysrgb&h=500"
            alt="bibek's img"
            className="lg:w-[400px] rounded-[32px] w-52 shadow-2xl ring-2 ring-emerald-200 dark:ring-emerald-500/30 float-slow"
          />
        </div>
      </section>

      <div
        className="flex flex-col items-center justify-center gap-8 mb-12"
        data-aos="fade-up"
        data-aos-delay="160"
      >
        <button className="px-6 py-3 font-medium text-white transition duration-300 rounded-full bg-emerald-600 hover:bg-emerald-500 hover:scale-105 pulse-glow">
          <a
            href="https://drive.google.com/file/d/1rchSCkwjuQIM9DFnfcVAM2byDrTE1jvN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </button>
      </div>

      <div className="fixed z-50 flex flex-col gap-2 text-3xl bottom-4 right-4 text-emerald-600 dark:text-emerald-400">
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
