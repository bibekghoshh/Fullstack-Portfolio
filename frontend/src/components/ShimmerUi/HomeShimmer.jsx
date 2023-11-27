import React from "react";

const HomeShimmer = () => {
  return (
    <section className="flex flex-col items-center pt-20 lg:pt-40 dark:bg-slate-800 dark:text-white">
      <section
        className="flex w-[95%] justify-center lg:mb-20 mb-10 lg:gap-5 gap-8 flex-col-reverse items-center lg:flex-row"
        id="home"
      >
        <div className="flex flex-col gap-5 lg:w-1/2 w-[95%] items-center lg:items-start ">
          <div className="flex flex-col items-center gap-4 text-xl lg:items-start">
            <p className="h-5 w-36 bg-slate-300 rounded-xl animate-pulse"></p>
            <p className="h-16 w-80 bg-slate-300 rounded-xl animate-pulse"></p>
            <p className="h-8 w-72 bg-slate-300 rounded-xl animate-pulse"></p>
            <p className="w-full h-8 bg-slate-300 rounded-xl animate-pulse"></p>
            <p className="w-48 h-8 bg-slate-300 rounded-xl animate-pulse"></p>
          </div>
          <div className="bg-slate-300 flex rounded-3xl  gap-5 w-[95vw] lg:w-[500px] h-24 items-center justify-around px-5 mt-8 animate-pulse">
            <div className="flex flex-col items-center gap-1">
              <p className="w-12 h-8 bg-slate-400 rounded-xl animate-pulse"></p>
              <p className="w-24 h-6 bg-slate-400 rounded-xl animate-pulse"></p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24 hidden lg:block"></div>
            <div className="flex flex-col items-center gap-1">
              <p className="w-12 h-8 bg-slate-400 rounded-xl animate-pulse"></p>
              <p className="h-6 w-28 bg-slate-400 rounded-xl animate-pulse"></p>
            </div>
            <div className="bg-slate-200 w-[1px] h-24 hidden lg:block"></div>
            <div className="flex flex-col items-center gap-1">
              <p className="w-12 h-8 bg-slate-400 rounded-xl animate-pulse"></p>
              <p className="h-6 w-28 bg-slate-400 rounded-xl animate-pulse"></p>
            </div>
          </div>
        </div>
        <div>
          <div className=" lg:w-[400px] lg:h-[400px] rounded-full w-48 h-48 bg-slate-300 animate-pulse"></div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-8 mb-12">
        <button className="h-8 rounded-md w-28 bg-slate-300 animate-pulse"></button>
      </div>

      <div className="fixed flex flex-col gap-2 text-2xl bottom-4 right-5 text-bgcolor dark:text-violet-500">
        <div className="rounded-full h-7 w-7 bg-slate-400 animate-pulse"></div>
        <div className="rounded-full h-7 w-7 bg-slate-400 animate-pulse"></div>
      </div>

      <div></div>
    </section>
  );
};

export default HomeShimmer;
