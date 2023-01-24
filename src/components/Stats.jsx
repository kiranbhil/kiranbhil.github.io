import React from "react";

const Stats = () => {
  return (
    // streak 
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div>
        <a href="https://github.com/kiranbhil">
          <img
            align="left"
            alt="streak-img"
            src="https://github-readme-streak-stats.herokuapp.com/?user=kiranbhil"
          />
        </a>
      </div>
    <br></br>
      <div className="flex">
        <a href="https://github.com/kiranbhil">  
          <img
            align="center"
            alt="stats-1"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kiranbhil"  //launguages
          />
        </a>
        <a href="https://github.com/kiranbhil">
          <img
            align="left"
            alt="image2"
            src="https://github-readme-stats.vercel.app/api?username=kiranbhil&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;