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
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-around gap-8 md:gap-0 px-6 py-10 surface-2 rounded-3xl drop-shadow-xl dark:bg-slate-900">
          <div className="flex flex-col items-center w-full gap-3 md:w-8/12 md:items-start">
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-4xl text-slate-900 dark:text-white text-display">
                {title}
              </h2>
              <p className="mb-1 font-medium text-center md:text-left text-slate-500 dark:text-slate-400">
                {new Date(startdate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(enddate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="w-full text-sm text-slate-600 md:w-9/12 dark:text-slate-200">
                {description}
              </p>
              <div className="ml-4 text-sm w-[90%] md:w-9/12 text-slate-600 dark:text-slate-200">
                {projectDescription &&
                  projectDescription.map((item, index) => (
                    <p key={index}>- {item}</p>
                  ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-2 py-2 md:w-9/12 md:justify-start">
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
            <div className="flex flex-col gap-4 md:flex-row">
              <button className="px-10 py-3 text-sm font-medium transition duration-300 bg-amber-400 border-2 rounded-full text-slate-900 drop-shadow-lg hover:bg-amber-300 dark:bg-amber-300">
                <a href={liveUrl} target="_blank" rel="noreferrer">
                  View Live
                </a>
              </button>
              <button className="px-8 py-3 text-sm font-medium transition duration-300 bg-white border-2 rounded-full border-slate-300 text-slate-800 drop-shadow-lg hover:border-emerald-400 hover:text-emerald-600 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:hover:text-emerald-300">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  View Project Details
                </a>
              </button>
            </div>
          </div>
          <div className="mt-0 md:mt-8">
            <img
              className="w-48 md:w-80 rounded-2xl shadow-xl float-slow"
              src={projectImage}
              alt="Project"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center w-full gap-10 mb-20 mt-28" id="projects">
      <div className="flex items-center gap-8 md:w-8/12" data-reveal>
        <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
          My Projects
        </p>
        <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-8 py-5">
        {projects.map((item, index) => (
          <div key={item._id} data-reveal data-reveal-delay={index * 80}>
            <ProjectCard projectDetails={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
