import React from "react";
import { skillsWithIcons } from "../Data/Data";

export const SkillCard = ({ SkillTitle, SkillIcon }) => {
  return (
    <>
      <div className="group flex flex-col items-center w-20 sm:w-24 md:w-28 gap-2 py-4 md:py-6 rounded-3xl surface shadow-md hover:-translate-y-1 transition duration-300 dark:bg-slate-800">
        <div className="text-3xl sm:text-4xl text-emerald-600 group-hover:text-emerald-500 transition">
          {SkillIcon}
        </div>
        <div className="text-[11px] sm:text-xs md:text-sm text-slate-700 dark:text-slate-200 text-center">
          <h4>{SkillTitle}</h4>
        </div>
        <div className="h-[2px] w-10 bg-emerald-400/80 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full gap-10 py-14 mt-12 surface-2 md:py-20 dark:bg-slate-900"
        id="skills"
      >
        <div className="flex flex-col w-[95vw] md:flex-row md:items-center md:gap-8 md:w-8/12 gap-4 px-4 sm:px-6 lg:px-0" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
              Core Skills
            </p>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              Production Ready
            </span>
          </div>
          <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
          <p className="text-sm text-slate-500 dark:text-slate-300 md:max-w-sm">
            A focused toolkit built through shipping projects, collaboration, and real-world
            problem solving.
          </p>
        </div>

        <div className="border-gradient w-[94vw] sm:w-[92%] max-w-5xl md:w-[90vw]" data-aos="fade-up" data-aos-delay="120">
          <div className="surface rounded-3xl px-6 py-8 dark:bg-slate-900">
            <div className="flex flex-row flex-wrap items-center justify-center lg:gap-14 w-full gap-6 sm:gap-8">
              {skillsWithIcons.map((item, index) => (
                <div key={index} data-aos="zoom-in" data-aos-delay={index * 35}>
                  <SkillCard SkillTitle={item.title} SkillIcon={item.icons} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-[95vw] items-center justify-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400" data-aos="fade-up" data-aos-delay="200">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Accessible UI
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Performance Optimization
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Responsive Design
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Collaboration Ready
          </span>
        </div>
      </div>
    </>
  );
};

export default Skills;
