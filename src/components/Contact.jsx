import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div
    name="contact"
    className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <br/>
        <br/>
        <div>
        <p className="py-6 text-center text-2xl ">
          KIRAN BHIL
      </p>
      
      <p className="py-6 text-center text-2xl ">
        +91 8530788762
      </p>
      <p className="py-6 text-center text-2xl ">
        kiranbhil1997@gmail.com
      </p>
        </div>

        <div className=" flex place-content-evenly px-10 md:gap-4 gap-4">
        <a
            href="https://www.linkedin.com/in/kiran-bhil-158a531b1/"
            className="items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />Linkedin
          </a>
          <a
            href="https://github.com/kiranbhil"
            className="items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} />GitHub
          </a>
          <a
            href="mailto:kiranbhil1997@gmail.com"
            className="items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={40} />Email
          </a>
          <a
            href="tel:8530788762"
            className="items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelephone size={40} />Mobile 
          </a>

        </div>
      </div>
      
      <div className=" flex justify-center items-center">
      
        <form
          action="https://formspree.io/f/xjvzgkzw"
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >

      <p className="py-6">Submit the form below to get in touch with me</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            className="p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        </form>
        
      </div>
        
    </div>
  </div>

  )
}

export default Contact