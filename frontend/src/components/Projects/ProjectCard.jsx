import { Button } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({ isAdmin = false, projectDetails }) => {
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
      <div className="flex items-center justify-around  px-5 py-8 bg-blue-50 rounded-3xl w-[75%] drop-shadow-xl">
        <div className="flex flex-col w-8/12 gap-2 border-blue-500">
          <div>
            <h2 className="mb-2 text-4xl font-bold text-newblue">{title}</h2>
            <p className="mb-1 font-medium">June 2023</p>
          </div>
          <div>
            <p className="w-9/12 text-sm text-slate-600">{description}</p>
            <p className="w-9/12 ml-12 text-sm text-slate-600">{description}</p>
          </div>
          <div className="flex flex-wrap w-9/12 gap-4 py-4">
            {technologies.map((item, index) => (
              <p
                key={index}
                className="px-4 py-2 text-xs bg-white rounded-md drop-shadow-md"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex gap-5">
            <button className="px-10 py-3 text-sm font-medium bg-yellow-400 border-2 rounded-full text-newblue drop-shadow-lg hover:bg-blue-50 hover:border-yellow-400">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                View Live
              </a>
            </button>
            <button className="px-8 py-3 text-sm font-medium bg-white border-2 rounded-full border-newblue text-newblue drop-shadow-lg">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                View-Project Details
              </a>
            </button>
          </div>
        </div>
        <div>
          <img className="w-80" src={projectImage} alt="Project" />
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
      <div className="flex items-center w-9/12 gap-8">
        <p className="text-4xl font-semibold text-newblue min-w-fit font-roboto">
          My Projects
        </p>
        <div className="h-[3px] w-full bg-newblue"></div>
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
