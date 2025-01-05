import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section with easing scroll animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      {/* AboutMe Section with sliding in and ease-in-out */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.div>

      {/* Skill Section with parallax and smooth scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Skill />
      </motion.div>

      {/* Education Section with bounce effect */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>

      {/* Projects Section with smooth slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      {/* Contact Section with scale and fade-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
