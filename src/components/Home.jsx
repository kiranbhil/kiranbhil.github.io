import React from "react";
import HeroImage from "../assets/HeroImage1.jpg";

function Home() {

  const handleclick= () =>{
    window.open("https://drive.google.com/u/0/uc?id=1on17rBpR6XtNoWAwAqc5kCt5H9PJ4UDQ&export=download")
  }
  
  return (
    <div
    name="home"
    className="h-screen py-2  w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-4xl font-bold text-white">
        Hello, my name is
        </p>
        <p className="text-3xl sm:text-5xl my-2 font-bold text-white">
        Kiran Bhil
        </p>
        
        <p className="text-gray-500 font-bold py-4 max-w-md text-2xl sm:text-4xl">
          I'm a Full Stack Web Developer
        </p>
        <div>
            <button onClick={handleclick}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            <a
            href="https://drive.google.com/file/d/1on17rBpR6XtNoWAwAqc5kCt5H9PJ4UDQ/view"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
              </button>
          </div>
        </div>

        <div margin-left={50}>
          <img
            src={HeroImage}
            alt="my profile"
            width={350}
            className=" rounded-full"
          />
        </div>
      </div>
    </div>

  )
}

export default Home