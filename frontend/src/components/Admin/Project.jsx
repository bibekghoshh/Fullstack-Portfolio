import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectCard } from "../Projects/ProjectCard";
import { toast } from "react-toastify";

const Project = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [detailsDescription, setDetailsDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      addProject(
        title,
        githubUrl,
        liveUrl,
        image,
        description,
        detailsDescription,
        techStack,
        startdate,
        enddate
      )
    );
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      toast.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch, loginMessage]);

  const inputStyle =
    "px-4 py-2 border-2 border-blue-500 rounded w-72 drop-shadow-md";

  return (
      <div className="flex flex-col items-center justify-center gap-10 py-5 mt-28">
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name of project"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Github Link"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Live Link"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Bullet Points should seperated by coma (,)"
            value={detailsDescription}
            onChange={(e) => setDetailsDescription(e.target.value)}
            className={inputStyle}
          />

          <input
            type="text"
            placeholder="tech should sepeerated by coma(,)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className={inputStyle}
          />

          <input
            type="date"
            placeholder="start date"
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
            className={inputStyle}
          />
          <input
            type="date"
            placeholder="end date"
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
            className={inputStyle}
          />

          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          />

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
          <Link
            to="/account"
            className="flex items-center justify-center gap-2 py-1 font-medium border-2 bg-slate-100"
          >
            <MdKeyboardBackspace /> BACK
          </Link>
        </form>

        <div className="flex flex-col items-center justify-center w-full gap-12 border-4 border-green-800">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                githubUrl={item.githubUrl}
                liveUrl={item.liveUrl}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
  );
};

export default Project;
