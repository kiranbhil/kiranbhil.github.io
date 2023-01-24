import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.svg";
import nodejs from "../assets/nodejs.svg";
import typescript from "../assets/typescript.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";

function Skills() {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-sky-500",
        },
        {
            id: 5,
            src: redux,
            title: "Redux",
            style: "shadow-purple-600",
        },
        {
            id: 6,
            src: nodejs,
            title: "NodeJs",
            style: "shadow-green-600",  
        },
        {
            id: 7,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-600",  
        },
        {
            id: 8,
            src: express,
            title: "Express",
            style: "shadow-white",  
        },
        {
            id: 9,
            src: typescript,
            title: "TypeScript",
            style: "shadow-blue-600",  
        },
        {
          id: 10,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 11,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 12,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
    
    
  return (
    <div
    name="skills"
    className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen "
  >
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          My Skills
        </p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-14 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default Skills