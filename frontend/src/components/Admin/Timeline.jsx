import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Timeline = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");

  const inputStyle =
    "px-4 py-2 border-2 border-blue-500 rounded w-72 drop-shadow-md";

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTimeline(title, description, startdate, enddate));
    dispatch(getUser());
  };
  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
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
      <div className="flex flex-col items-center gap-12">
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Organization"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            type="date"
            placeholder="Start Date"
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
            className={inputStyle}
          />
          <input
            type="date"
            placeholder="End Date"
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
            className={inputStyle}
          />

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
          
          <Link to="/account" className="flex items-center justify-center gap-2 font-medium border-4 rounded-md bg-slate-200">
            <MdKeyboardBackspace /> BACK 
          </Link>
        </form>

        <div className="flex flex-col items-center justify-center gap-5 mb-12">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="px-2 py-1 border-2 bg-slate-100" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "1px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 500 }}>
                  {new Date(item.startdate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  <i> To </i>{" "}
                  {new Date(item.enddate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
