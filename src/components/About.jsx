import React from 'react'
import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";

function About() {
  return (
    <div
    name="about"
    className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About Me
        </p>
      </div>

      <p className="text-3xl mt-10">
      I'm Kiran Bhil
      </p>
      <br />
      <p className="text-xx sm:text-xl">
      A highly enthusiastic and hardworking developer,with strong decision making, communication, collaboration skills and good attention to detail with the ability to write efficient code using MERN stack technologies.
      </p>
      <p className="text-xx sm:text-xl">
      As I grew and flourish as a developer, I have been building applications from past couple of months using MERN stack technologies.
      </p>
      
      <br/>
      <br/>
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          My GitHub
        </p>
      </div>

      <GitHubCalendar
        style={{ margin: "auto" }}
        username="kiranbhil"
        blockSize={20}
        // fontSize={20}
        className='text-xs sm:text-xl '
      >
         {/* <ReactTooltip delayShow={20} html />  */}
      </GitHubCalendar>
      {/* <br/> */}
      <div className='w-full grid sm:grid-cols-2 py-4 mt-5 md:grid-cols-3 gap-4 pr-2 sm:px-0'>
      <a href="https://github.com/kiranbhil">
          <img
          width={300}
          height={25}
            align="left"
            alt="streak-img"
            src="https://github-readme-streak-stats.herokuapp.com/?user=kiranbhil"
          />
        </a> 
        
        <a href="https://github.com/kiranbhil">
          <img
          width={300}
            align="left"
            alt="image2"
            src="https://github-readme-stats.vercel.app/api?username=kiranbhil&count_private=true&show_icons=true" //stats
          />
        </a> 
        <a href="https://github.com/kiranbhil">  
          <img
          width={210}
            align="center"
            alt="stats-1"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kiranbhil"  //launguages
          />
        </a>
      </div>
    </div>
    
  </div>

  )
}

export default About