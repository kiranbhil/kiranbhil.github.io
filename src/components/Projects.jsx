import anthropology from "../assets/Projects/anthropology.png"
import myntra from "../assets/Projects/myntra.png"
import tripoto from "../assets/Projects/tripoto.png";
import em from "../assets/Projects/em.png";
import shopkart from "../assets/Projects/shopkart.png";
import React from 'react'

function Projects() {
    const portfolios = [
        {
          id: 1,
          src: anthropology,
          text: "Anthropology Clone",
          link1 :"https://wonderful-malasada-e63214.netlify.app/",
          link2: "https://github.com/kiranbhil/Anthropologie-Clone",
          tech: "HTML, CSS, JavaScript, JSON-Server, LocalStorage ",
          desc: "Anthropologie is an American clothing retailer with approximately 200 stores across the U.S., Canada, and the UK that offers an assortment of clothing, jewelry, home furniture, decoration, beauty products, and gifts.",
        },
        {
          id: 2,
          src: myntra,
          text: "Myntra Clone",
          link1: "https://e-myntra-clone.netlify.app/",
          link2: "https://github.com/kiranbhil/myntra-website",
          tech: "HTML, CSS, JavaScript, LocalStorage ",
          desc: "Myntra provides a number of Internet-based services through the Platform. One such Service enables Users to purchase original merchandise such as clothing, footwear and accessories from various fashion and lifestyle brands."
        },
        {
          id: 3,
          src: tripoto,
          text: "Tripoto Clone",
          link1: "https://chic-syrniki-568fa1.netlify.app/",
          link2: "https://github.com/kiranbhil/Tripoto-clone",
          tech: "ReactJs, Redux, NodeJs, ExpressJs, MongoDB,ChakraUI ",
          desc: "Tripoto is social travel platform to share and discover travel experiences, stories, community, tourism guides, hotels and holidays."
        },

        {
          id: 4,
          src: em,
          text: "EmailChimp Clone",
          link1: "https://mailchimp-clone-project.netlify.app/",
          link2: "https://github.com/kiranbhil/unequaled-stream-376",
          tech: "ReactJs, Redux, NodeJs, MongoDB, ExpressJs ",
          desc: "Clone of E-marketing website MailChimp which gives platform to the users to create thier own store. MailChimp also provide some mail and website templates to create good and professional mails. "
        },

        {
          id: 4,
          src: shopkart,
          text: "Flipkart Clone",
          link1: "https://shopkartclone.netlify.app/",
          link2: "https://github.com/kiranbhil/honest-doctor-7537",
          tech: "ReactJs, Redux, NodeJs, ExpressJs, MongoDB,ChakraUI ",
          desc: "ShopKart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories."
        },
      ];
    
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 py-4 mt-5 md:grid-cols-3 gap-8 pr-2 sm:px-0">
          {portfolios.map(({ id, src, text ,desc, link1, link2, tech}) => (
            <div key={id} className="shadow-md p-4 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-xl font-bold mt-10">
                {text}
                </p>
                
              <p className="text-xs mt-5">
                {desc}
              </p>

              <p className="text-xs font-bold mt-10">
                Teck Stack : {tech}
                </p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                    href={link1}
                    target="_blank"
                    rel="noreferrer"
                >
                  Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                    href={link2}
                    target="_blank"
                    rel="noreferrer"
                >
                
                  Code
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects