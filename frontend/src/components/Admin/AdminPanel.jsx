import React, { useEffect, useState } from "react";
// import "./AdminPanel.css";
import { AiOutlineProject } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { DiCode } from "react-icons/di";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../actions/user";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, loading } = useSelector((state) => state.update);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({});

  const inputStyle =
    "px-4 py-2 border-2 border-blue-500 rounded w-72 drop-shadow-md";
  const divStyle =
    "flex items-center gap-2 px-4 py-2 text-lg transition duration-200 border-2 rounded-md bg-slate-100 border-newblue drop-shadow-lg hover:scale-105";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, about));

    console.log(name, email, password, about);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
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

  return (
    <div className="mt-28">
      <div className="flex flex-col items-center gap-12 mb-12">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-5"
        >
          <div className="flex flex-col gap-4">
            <input
              className={inputStyle}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={inputStyle}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={inputStyle}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center ">
              <p className="text-3xl font-semibold w-36 text-newblue font-roboto">
                About
              </p>
              <div className="h-[3px] w-full bg-newblue"></div>
            </div>

            <input
              type="text"
              placeholder="Name"
              value={about.name}
              onChange={(e) => setAbout({ ...about, name: e.target.value })}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Title"
              value={about.title}
              onChange={(e) => setAbout({ ...about, title: e.target.value })}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Subtitle"
              value={about.subtitle}
              onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Description"
              value={about.description}
              onChange={(e) =>
                setAbout({ ...about, description: e.target.value })
              }
              className={`${inputStyle}`}
            />
            <input
              type="file"
              onChange={handleAboutImage}
              className="mt-2"
              placeholder="Choose Avatar"
              accept="image/*"
            />
          </div>
          <button
            className="px-5 py-2 mb-5 font-medium text-white rounded bg-bgcolor"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            Update
          </button>
          <div className="flex gap-10">
            <Link to="/admin/timeline" className={divStyle}>
              TIMELINE <MdTimeline />
            </Link>
            <Link to="/admin/youtube" className={divStyle}>
              VIDOES <FaYoutube />
            </Link>
            <Link to="/admin/project" className={divStyle}>
              PROJECTS <AiOutlineProject />
            </Link>
            <Link to="/admin/skill" className={divStyle}>
              SKILLS <DiCode />
            </Link>
          </div>
        </form>
        <button
          onClick={logoutHandler}
          className="px-5 py-1 text-white bg-red-600 rounded"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
