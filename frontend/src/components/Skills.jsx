import { skillGroups } from "../Data/Data";

const Skills = () => {
return ( <section
   id="skills"
   className="py-20 bg-white dark:bg-slate-900 flex flex-col items-center"
 >
{/* Header */} <div
     className="max-w-4xl text-center mb-16 px-6"
     data-aos="fade-up"
   > <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
Technical Skills </h2>

    <p className="mt-4 text-slate-500 dark:text-slate-400">
      Technologies I use to build scalable web applications and real-world products.
    </p>
  </div>

  {/* Skill Groups */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full px-6">

    {skillGroups.map((group, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 120}
        className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition"
      >
        <h3 className="text-lg font-semibold text-emerald-600 mb-6">
          {group.title}
        </h3>

        <div className="grid grid-cols-3 gap-6">
          {group.skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition"
            >
              <div className="text-3xl text-emerald-500">
                {skill.icon}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}

  </div>

  {/* Extra Recruiter Info */}
  <div
    className="flex flex-wrap justify-center gap-4 mt-16 text-sm"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800">
      2+ Years Production Experience
    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800">
      Robotics Software Development
    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800">
      Full Stack JavaScript
    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800">
      Cross Platform Desktop Apps
    </span>
  </div>
</section>

);
};

export default Skills;
