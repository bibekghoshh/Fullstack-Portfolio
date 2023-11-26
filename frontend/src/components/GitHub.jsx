const GitHub = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-12 mb-12 " id="github">
      <div className="flex items-center gap-8 md:w-8/12">
        <p className="text-2xl font-semibold md:text-4xl text-newblue dark:text-white min-w-fit font-roboto">
          GitHub Contributions
        </p>
        <div className="h-[3px] w-full bg-newblue dark:bg-white hidden md:block"></div>
      </div>

      <div className=" px-12 py-16 overflow-x-auto rounded-xl bg-slate-100 dark:bg-slate-900 max-w-[100vw] flex  lg:justify-center justify-start h-fit drop-shadow-md">
        <img
          className=" min-w-[920px]"
          src="https://ghchart.rshah.org/bibekghoshh"
          alt="Bibek's Github chart"
        />
      </div>
    </div>
  );
};

export default GitHub;
