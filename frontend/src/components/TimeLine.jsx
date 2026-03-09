import React from "react";

const Timeline = ({ timelines = [] }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">

      {/* Section Header */}
      <div
        className="text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Professional Journey
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
          My journey building real-world products, solving engineering problems,
          and continuously learning new technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-emerald-400 pl-6">

        {timelines.map((item, index) => (
          <div
            key={index}
            className="relative mb-14 ml-6"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >

            {/* Timeline Dot */}
            <span className="absolute -left-[63px] top-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900"></span>

            {/* Card */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              {/* Role */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.role}
              </h3>

              {/* Company */}
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
                {item.company}
              </p>

              {/* Date */}
              <p className="text-xs text-slate-500 mt-1">
                {item.startdate} — {item.enddate}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements && (
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-500 dark:text-slate-400 space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Timeline;