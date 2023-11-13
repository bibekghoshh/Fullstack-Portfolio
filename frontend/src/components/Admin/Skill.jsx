import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkills, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";
import { SkillCard } from "../Skills";
import {toast} from 'react-toastify';

const Skill = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addSkills(title,  image));
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
    <div className="mt-32 mb-16">
      <div className="flex flex-col items-center gap-12">
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <Link to="/account" className="flex items-center justify-center gap-2 py-1 font-medium border-2 bg-slate-100">
             <MdKeyboardBackspace /> BACK
          </Link>

        </form>

        <div className="flex flex-wrap w-9/12 gap-10">
          {user &&
            user.skills &&
            user.skills.map((item) => (
              <SkillCard
                id={item._id}
                key={item._id}
                SkillTitle={item.title}
                SkillImage={item.image.url}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;