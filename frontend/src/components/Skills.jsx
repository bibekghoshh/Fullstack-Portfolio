import React from "react";

export const SkillCard = ({ SkillTitle, SkillImage, id }) => {

  return (
    <>
      <div className="flex flex-col items-center w-16 gap-2 py-2 md:py-4 md:w-24 rounded-2xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 drop-shadow-lg">
        <div className="skill-image">
          <img className="w-6 md:w-8" src={SkillImage} alt="C Programming" />
        </div>
        <div className="text-xs text-white md:text-base">
          <h4>{SkillTitle}</h4>
        </div>
      </div>
    </>
  );
};

const Skills = ({ skills }) => {
  return (
    <>
      <div
        className="flex flex-col items-center w-[99.7vw] gap-8 py-12 mt-24 bg-blue-100 md:py-16 dark:bg-slate-900"
        id="skills"
      >
        <div className="flex items-center gap-8 md:w-8/12 ">
          <p className="text-3xl font-semibold md:text-4xl text-newblue min-w-fit font-roboto dark:text-white">
            Skills Acquired
          </p>
          <div className="h-[3px] w-full bg-newblue dark:bg-white hidden md:block"></div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center lg:gap-20 lg:w-[1000px] w-full gap-10">
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
