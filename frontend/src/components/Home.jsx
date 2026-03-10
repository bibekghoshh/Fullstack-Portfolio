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
        className="flex w-[90vw] max-w-6xl px-4 sm:px-6 lg:px-10 justify-center lg:mb-20 mb-10 lg:gap-10 gap-8 flex-col-reverse items-center lg:flex-row"
        id="home"
      >
        <div
          className="flex flex-col gap-6 lg:w-1/2 w-[90vw] items-center lg:items-start"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-4 text-xl lg:items-start">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Open to Frontend / Full Stack Roles
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold lg:text-7xl text-display text-slate-900 dark:text-white text-center lg:text-left">
              Bibek Ghosh
            </h1>
            <h2 className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 lg:text-xl text-center lg:text-left">
              Frontend developer crafting{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                clean, fast, and accessible
              </span>{" "}
              web experiences.
            </h2>
          </div>

          <p className="my-2 text-center lg:w-4/5 text-slate-600 lg:text-start dark:text-slate-300">
            I specialize in React and modern JavaScript, turning complex requirements
            into polished interfaces. I care about performance, clear UX, and reliable
            systems that scale with product needs.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              React + Tailwind
            </span>
            <span className="px-4 py-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
              JavaScript + TypeScript
            </span>
            <span className="px-4 py-2 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/20 dark:text-amber-200">
              UI/UX + Performance
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-[90vw] sm:w-auto">
            <a
              className="px-6 py-3 font-medium text-white transition duration-300 rounded-full bg-emerald-600 hover:bg-emerald-500 hover:scale-105 pulse-glow w-[90vw] sm:w-auto text-center"
              href="https://drive.google.com/file/d/1rchSCkwjuQIM9DFnfcVAM2byDrTE1jvN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className="px-6 py-3 font-medium transition duration-300 rounded-full border border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-emerald-300 w-[90vw] sm:w-auto text-center"
              href="mailto:bibek7478@gmail.com"
            >
              Contact Me
            </a>
          </div>

          <div className="border-gradient w-[90vw] max-w-[520px] mt-2">
            <div className="flex flex-col sm:flex-row rounded-3xl text-slate-900 dark:text-white gap-5 sm:h-24 items-center justify-around px-5 py-4 sm:py-0 surface dark:bg-slate-800">
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">2+ </p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  Years Professional Experience
                </p>
              </div>
              <div className="bg-slate-200/70 w-[1px] h-12 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">10+ </p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  Projects Built
                </p>
              </div>
              <div className="bg-slate-200/70 w-[1px] h-12 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-bold lg:text-5xl text-display">5+</p>
                <p className="font-medium lg:text-xs text-[8px] text-slate-500 dark:text-slate-400">
                  Technologies Used
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="120" className="w-full lg:w-auto">
          <div className="border-gradient w-full max-w-[420px] mx-auto">
            <div className="surface rounded-[32px] p-5 dark:bg-slate-800">
              <img
                src="https://images.pexels.com/photos/36244506/pexels-photo-36244506.png?auto=compress&cs=tinysrgb&h=500"
                alt="bibek's img"
                className="w-full rounded-[24px] shadow-2xl ring-2 ring-emerald-200 dark:ring-emerald-500/30 float-slow"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <span>Based in India (IST)</span>
                  <span>Remote-friendly</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Available for interviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="flex flex-col items-center justify-center gap-8 mb-12 px-4"
        data-aos="fade-up"
        data-aos-delay="160"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Fast learner
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Product mindset
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Performance focused
          </span>
        </div>
      </div>

      <div className="fixed z-50 flex flex-col gap-2 text-3xl bottom-4 right-4 text-emerald-600 dark:text-emerald-400">
        <button
          className="focus-ring"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <FaArrowCircleUp />
        </button>
        <button
          className="focus-ring"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          type="button"
        >
          <FaArrowCircleDown />
        </button>
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
