import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
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
      <div className="projectCard">
        <div>
          <div>
            <img className="project-img" src={projectImage} alt="Project" />
          </div>
          <Typography variant="h5">{projectTitle}</Typography>
          <div className="project-view">
            <button>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Live View
              </a>
            </button>
            <button>
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Github
              </a>
            </button>
          </div>
        </div>
        <div>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
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
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
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
