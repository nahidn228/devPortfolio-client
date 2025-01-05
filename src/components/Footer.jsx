import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#131415] text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#hero" className="link link-hover">
          Home
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>
        <a href="#skill" className="link link-hover">
          Skill
        </a>
        <a href="#education" className="link link-hover">
          Education
        </a>
        <a href="#project" className="link link-hover">
          Projects
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/nahidn228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nahidn228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl  transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/nahidn228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl  transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Nahid
          Hasan
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
