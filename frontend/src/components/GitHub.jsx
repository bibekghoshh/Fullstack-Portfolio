const GitHub = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-16 mb-16" id="github">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:w-8/12 gap-4" data-aos="fade-up">
        <div className="flex items-center gap-3">
          <p className="text-3xl font-semibold md:text-4xl text-slate-900 min-w-fit text-display dark:text-white">
            GitHub Activity
          </p>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
            Consistent Builder
          </span>
        </div>
        <div className="h-[3px] w-full bg-emerald-400 hidden md:block"></div>
        <p className="text-sm text-slate-500 dark:text-slate-300 md:max-w-sm">
          Regular commits and real-world projects, reflecting steady delivery and growth.
        </p>
      </div>

      <div className="border-gradient w-[92%] max-w-6xl" data-aos="fade-up" data-aos-delay="120">
        <div className="surface rounded-3xl px-6 py-8 md:px-10 md:py-12 overflow-x-auto dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-slate-400">
            <span>365-day contribution graph</span>
            <span>Updated automatically</span>
          </div>
          <div className="flex lg:justify-center justify-start">
            <img
              className="min-w-[920px]"
              src="https://ghchart.rshah.org/bibekghoshh"
              alt="Bibek's Github chart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
