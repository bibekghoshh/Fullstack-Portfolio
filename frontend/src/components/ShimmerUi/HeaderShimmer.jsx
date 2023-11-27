import React from "react";

const Header = () => {
  return (
    <>
      <header
        className={`fixed top-0 z-50 flex items-center justify-between lg:px-[15%] px-2 w-full lg:h-20 h-16 drop-shadow-xl `}
      >
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-300 animate-pulse"></div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div
            className={`flex items-center right-0 w-full top-0 gap-6 flex-row  `}
          >
            <ul className="flex-col items-center hidden gap-6 font-bold lg:flex lg:gap-12 lg:flex-row nav-items">
              <li className="w-32 h-5 bg-gray-300 rounded-xl animate-pulse"></li>
              <li className="w-24 h-5 bg-gray-300 rounded-xl animate-pulse"></li>
              <li className="w-16 h-5 bg-gray-300 rounded-xl animate-pulse"></li>
            </ul>
            <div className="flex items-center gap-2 ">
              <div className="w-[0.5px] h-7 bg-slate-300 dark:bg-white hidden lg:block"></div>
              <p className="hidden w-8 h-5 rounded-md bg-slate-300 animate-pulse lg:block"></p>
              <p className="w-8 h-5 rounded-md bg-slate-300 animate-pulse"></p>
              <p className="w-8 h-5 rounded-md bg-slate-300 animate-pulse"></p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
