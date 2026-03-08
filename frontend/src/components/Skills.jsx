import React from "react";
import { skillsWithIcons } from "../Data/Data";

export const SkillCard = ({ SkillTitle, SkillIcon }) => {
  return (
    <>
      <div className="group flex flex-col items-center w-20 gap-2 py-3 md:py-5 md:w-28 rounded-3xl glass hover:-translate-y-1 transition duration-300">
        <div className="text-4xl text-emerald-600 group-hover:text-emerald-500 transition">
          {SkillIcon}
        </div>
        <div className="text-xs text-slate-700 md:text-base dark:text-slate-200">
          <h4>{SkillTitle}</h4>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-[99.7vw] gap-8 py-12 mt-24 surface-2 md:py-16 dark:bg-slate-900"
        id="skills"
      >
        <div className="flex items-center gap-8 md:w-8/12" data-reveal>
          <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
            Skills Acquired
          </p>
          <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center lg:gap-16 lg:w-[1000px] w-full gap-10">
          {skillsWithIcons.map((item, index) => (
            <div key={index} data-reveal data-reveal-delay={index * 40}>
              <SkillCard SkillTitle={item.title} SkillIcon={item.icons} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
