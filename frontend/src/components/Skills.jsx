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
      <div className="">
        <div className="flex flex-col items-center gap-2  w-28 bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-md">
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
      </div>
    </>
  );
};

const Skills = ({ skills }) => {
  return (
    <>
    <div className="flex flex-col items-center mt-24  gap-8 bg-blue-100 py-16">
      <div className="flex w-9/12 items-center">
      <p className=" text-newblue font-semibold w-96 text-4xl font-roboto">Skills Acquired</p>
        <div className="h-[3px] w-full bg-newblue"></div>
      </div>
      <div className="flex flex-row gap-20 flex-wrap w-9/12 items-center justify-center ">
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
