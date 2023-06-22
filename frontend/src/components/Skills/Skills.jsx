import { Button } from "@mui/material";
import React from "react";
import "./Skills.css";
import { Delete } from "@mui/icons-material";
import { deleteSkill, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const SkillCard = ({ SkillTitle, SkillImage, isAdmin = false, id }) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteSkill(id));
    dispatch(getUser());
  };

  return (
    <>
      <div class="skill-portfolio-items">
        <div class="skill-item-flex">
          <div class="skill-image">
            <img src={SkillImage} alt="C Programming" />
          </div>
          <div class="skill-name">
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
    <div className="skillSection">
      {skills.map((item) => (
        <SkillCard
          id={item._id}
          key={item._id}
          SkillTitle={item.title}
          SkillImage={item.image.url}
        />
      ))}
    </div>
  );
};

export default Skills;
