import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skill />
      <Education />

      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
