import { Button } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { deleteProject, getUser } from "../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({ isAdmin = false, projectDetails }) => {
  // console.log(projectDetails);
  const { githubUrl, liveUrl, title, description, techStack, _id } =
    projectDetails;
  const projectImage = projectDetails.image.url;
  const technologies = techStack.split(",");

  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-around gap-8 md:gap-0 px-6 py-8 bg-blue-50 rounded-3xl lg:w-[1024px] w-full drop-shadow-xl dark:bg-slate-900 ">
        <div className="flex flex-col items-center w-full gap-2 md:w-8/12 md:items-start">
          <div>
            <h2 className="mb-2 text-2xl font-bold md:text-4xl text-newblue dark:text-white">{title}</h2>
            <p className="mb-1 font-medium text-center md:text-left">June 2023</p>
          </div>
          <div>
            <p className="w-full text-sm text-gray-700 md:w-9/12 dark:text-slate-200">{description}</p>
            <p className="ml-12 text-sm w-[90%] md:w-9/12 text-gray-700 dark:text-slate-200">{description}</p>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-2 py-1 md:py-4 md:gap-4 md:w-9/12 md:justify-start">
            {technologies.map((item, index) => (
              <p
                key={index}
                className="px-2 py-1 text-xs bg-white rounded-md md:px-4 md:py-2 drop-shadow-md dark:bg-slate-800"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <button className="px-10 py-3 text-sm font-medium transition duration-500 bg-yellow-400 border-2 rounded-full text-newblue drop-shadow-lg hover:bg-blue-50 hover:border-yellow-400 dark:bg-white dark:hover:bg-slate-800 dark:border-white dark:text-blue-500">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                View Live
              </a>
            </button>
            <button className="px-8 py-3 text-sm font-medium bg-white border-2 rounded-full border-newblue text-newblue drop-shadow-lg dark:bg-slate-900 dark:border-white dark:text-white">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                View-Project Details
              </a>
            </button>
          </div>
        </div>
        <div>
          <img className="w-48 md:w-80" src={projectImage} alt="Project" />
        </div>
      </div>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(_id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div
      className="flex flex-col items-center w-full gap-10 mb-20 mt-28"
      id="projects"
    >
      <div className="flex items-center gap-8 md:w-8/12">
        <p className="text-3xl font-semibold md:text-4xl text-newblue min-w-fit font-roboto dark:text-white">
          My Projects
        </p>
        <div className="h-[3px] w-full bg-newblue dark:bg-white hidden md:block"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-8 py-5 ">
        {projects.map((item) => (
          <ProjectCard key={item._id} projectDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
