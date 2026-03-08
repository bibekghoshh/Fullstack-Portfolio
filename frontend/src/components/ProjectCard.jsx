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
      <div className="border-gradient w-[95vw] max-w-6xl md:w-[90vw]">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-6 px-4 sm:px-6 py-8 sm:py-10 surface-2 rounded-3xl drop-shadow-xl dark:bg-slate-900">
          <div className="flex flex-col items-center w-full gap-4 lg:w-7/12 lg:items-start">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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
            <div className="w-[90vw] lg:w-full">
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold lg:text-4xl text-slate-900 dark:text-white text-display text-center lg:text-left">
                {title}
              </h2>
              <p className="text-sm text-slate-600 lg:w-11/12 dark:text-slate-200 text-center lg:text-left">
                {description}
              </p>
            </div>

            <div className="w-[90vw] lg:w-11/12">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Highlights
              </p>
              <div className="mt-2 ml-4 text-sm text-slate-600 dark:text-slate-200">
                {projectDescription &&
                  projectDescription.map((item, index) => (
                    <p key={index} className="break-words">
                      - {item}
                    </p>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center w-[90vw] gap-2 py-1 lg:w-11/12 lg:justify-start">
              {visibleTechStack.map((item, index) => (
                <p
                  key={index}
                  className="px-3 py-1 text-[11px] sm:text-xs bg-white rounded-full md:px-4 md:py-2 drop-shadow-md dark:bg-slate-800 dark:text-white"
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

            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <a
                className="px-8 sm:px-10 py-3 text-sm font-medium transition duration-300 bg-emerald-600 rounded-full text-white drop-shadow-lg hover:bg-emerald-500 text-center w-[90vw] sm:w-auto"
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                className="px-8 py-3 text-sm font-medium transition duration-300 bg-white border-2 rounded-full border-slate-300 text-slate-800 drop-shadow-lg hover:border-emerald-400 hover:text-emerald-600 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:hover:text-emerald-300 text-center w-[90vw] sm:w-auto"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="mt-0 lg:mt-4 w-[60vw] lg:w-5/12 md:w-6/12">
            <div className="border-gradient">
              <div className="surface rounded-2xl p-4 dark:bg-slate-800">
                <img
                  className="w-[90vw] lg:w-full rounded-xl shadow-xl float-slow"
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
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <div className="flex flex-col items-center w-full gap-10 mb-20 mt-28 px-4 sm:px-6" id="projects">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 w-[90vw] max-w-6xl md:w-[80vw]" data-aos="fade-up">
        <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
          My Projects
        </p>
        <div className="h-[3px] w-full bg-emerald-400 hidden sm:block"></div>
      </div>

      <div className="flex flex-col items-center w-[90vw] gap-8 py-5 max-w-6xl">
        {visibleProjects.map((item, index) => (
          <div key={item._id} data-aos="fade-up" data-aos-delay={index * 80}>
            <ProjectCard projectDetails={item} />
          </div>
        ))}
      </div>

      {projects.length > 2 && (
        <button
          className="animate-bounce px-6 py-3 text-sm font-medium transition duration-300 rounded-full border border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-emerald-300"
          onClick={() => setShowAllProjects((prev) => !prev)}
        >
          {showAllProjects ? "Show Less Projects" : "Show More Projects"}
        </button>
      )}
    </div>
  );
};

export default Projects;
