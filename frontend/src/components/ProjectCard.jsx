import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProjectCard = ({ projectDetails }) => {
  const {
    githubUrl,
    liveUrl,
    title,
    startdate,
    enddate,
    description,
    detailsDescription,
    techStack,
  } = projectDetails;
  const projectImage = projectDetails.image.url;
  const technologies = techStack.split(",");
  const projectDescription = detailsDescription ? detailsDescription.split(".") : null;

  const [showAll, setShowAll] = useState(false);
  const visibleTechStack = showAll ? technologies : technologies.slice(0, 5);

  return (
    <>
      <div className="border-gradient w-full lg:w-[1024px]">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-6 px-6 py-10 surface-2 rounded-3xl drop-shadow-xl dark:bg-slate-900">
          <div className="flex flex-col items-center w-full gap-4 md:w-7/12 md:items-start">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                Production Project
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {new Date(startdate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(enddate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-4xl text-slate-900 dark:text-white text-display text-center md:text-left">
                {title}
              </h2>
              <p className="text-sm text-slate-600 md:w-11/12 dark:text-slate-200 text-center md:text-left">
                {description}
              </p>
            </div>

            <div className="w-full md:w-11/12">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Highlights
              </p>
              <div className="mt-2 ml-4 text-sm text-slate-600 dark:text-slate-200">
                {projectDescription &&
                  projectDescription.map((item, index) => (
                    <p key={index}>- {item}</p>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center w-full gap-2 py-1 md:w-11/12 md:justify-start">
              {visibleTechStack.map((item, index) => (
                <p
                  key={index}
                  className="px-3 py-1 text-xs bg-white rounded-full md:px-4 md:py-2 drop-shadow-md dark:bg-slate-800 dark:text-white"
                >
                  {item}
                </p>
              ))}
              {technologies.length > 5 && (
                <button
                  className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full md:px-4 md:py-2 drop-shadow-md text-emerald-600 dark:text-emerald-300"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Hide Skills" : `+${technologies.length - 5} more`}
                  {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              )}
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <a
                className="px-10 py-3 text-sm font-medium transition duration-300 bg-emerald-600 rounded-full text-white drop-shadow-lg hover:bg-emerald-500"
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                className="px-8 py-3 text-sm font-medium transition duration-300 bg-white border-2 rounded-full border-slate-300 text-slate-800 drop-shadow-lg hover:border-emerald-400 hover:text-emerald-600 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:hover:text-emerald-300"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="mt-0 md:mt-4 w-full md:w-5/12">
            <div className="border-gradient">
              <div className="surface rounded-2xl p-4 dark:bg-slate-800">
                <img
                  className="w-full rounded-xl shadow-xl float-slow"
                  src={projectImage}
                  alt="Project"
                />
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Responsive UI</span>
                  <span>Performance tuned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center w-full gap-10 mb-20 mt-28" id="projects">
      <div className="flex items-center gap-8 md:w-8/12" data-aos="fade-up">
        <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
          My Projects
        </p>
        <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-8 py-5">
        {projects.map((item, index) => (
          <div key={item._id} data-aos="fade-up" data-aos-delay={index * 80}>
            <ProjectCard projectDetails={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
