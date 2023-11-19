
const GitHub = () => {
    
      
  return (
    <div className="flex flex-col items-center gap-10 mt-12 mb-12" id="github">
      <div className="flex items-center w-9/12 gap-8">
        <p className="text-4xl font-semibold text-newblue min-w-fit font-roboto">
          GitHub Contributions
        </p>
        <div className="h-[3px] w-full bg-newblue"></div>
      </div>
      <div className="px-12 py-16 rounded-xl bg-slate-100">
      <img className="w-[1000px]" src="http://ghchart.rshah.org/bibekghoshh" alt="Bibek's Github chart" />
      
      </div>
    </div>
  );
};

export default GitHub;
