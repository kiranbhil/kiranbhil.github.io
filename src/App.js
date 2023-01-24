import Home from "./components/Home";
import About from "./components/About";
import {NavBar} from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <NavBar />
    <br/>
    <div className="w-full h-16 bg-gradient-to-b from-gray-800 to-black text-white"></div>
    <Home />
    <About />
    <Projects />
    <Skills/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
