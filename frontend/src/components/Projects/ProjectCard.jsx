import { Button, Typography } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  githubUrl,
  liveUrl,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
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
            <h2 className="mb-2 text-4xl font-bold text-newblue">{projectTitle}</h2>
            <p className="font-medium">June 2023</p>
          </div>
          <div>
          <p className="w-9/12 text-sm text-slate-600">{description}</p>
          <p className="w-9/12 ml-12 text-sm text-slate-600">{description}</p> 
          </div>
          <Typography variant="h6">{technologies}</Typography>
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
        <div className="border-2 border-red-500 ">
          <img className="w-80" src={projectImage} alt="Project" />
        </div>
      </div>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center w-full gap-10 mt-28">
      <div className="flex items-center w-9/12 gap-8">
      <p className="text-4xl font-semibold text-newblue min-w-fit font-roboto">My Projects</p>
        <div className="h-[3px] w-full bg-newblue"></div>
      </div>

      <div className="flex flex-col items-center w-full gap-8 py-5 ">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            githubUrl={item.githubUrl}
            liveUrl={item.liveUrl}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
