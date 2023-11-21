import { Button } from "@mui/material";
import React from "react";
import { Delete } from "@mui/icons-material";
import { deleteSkill, getUser } from "../actions/user";
import { useDispatch } from "react-redux";

export const SkillCard = ({ SkillTitle, SkillImage, isAdmin = false, id }) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteSkill(id));
    dispatch(getUser());
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 py-4 rounded-md w-28 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 drop-shadow-lg">
        <div className="skill-image">
          <img className="w-12" src={SkillImage} alt="C Programming" />
        </div>
        <div className="text-white">
          <h4>{SkillTitle}</h4>
        </div>

        {isAdmin && (
          <Button
            style={{ color: "rgba(40,40,40,0.7)" }}
            onClick={() => deleteHandler(id)}
          >
            <Delete />
          </Button>
        )}
      </div>
    </>
  );
};

const Skills = ({ skills }) => {
  return (
    <>
      <div
        className="flex flex-col items-center gap-8 py-16 mt-24 bg-blue-100 dark:bg-slate-900"
        id="skills"
      >
        <div className="flex items-center w-9/12 gap-8">
          <p className="text-4xl font-semibold text-newblue min-w-fit font-roboto dark:text-white">
            Skills Acquired
          </p>
          <div className="h-[3px] w-full bg-newblue dark:bg-white"></div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-9/12 gap-20 ">
          {skills.map((item) => (
            <SkillCard
              id={item._id}
              key={item._id}
              SkillTitle={item.title}
              SkillImage={item.image.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
