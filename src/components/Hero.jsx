import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero text-white min-h-screen bg-[#262728]">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-8 px-14">
        {/* Profile Image */}
        <div className="">
          <img
            src="/profile-pic.png"
            className="w-56 h-56  lg:w-80 lg:h-80 rounded-full shadow-2xl border-4 border-[#8C49E9] object-cover"
            alt="Nahid Hasan"
          />
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left ">
          <h2 className="text-5xl font-extrabold mb-4 text-[#8C49E9] ">
            Hi, I'm Nahid Hasan
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed ">
            A passionate{" "}
            <span className="text-[#8C49E9]">Frontend Developer</span> crafting
            beautiful and seamless web experiences with modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mb-6">
            <a
              href="https://github.com/nahidn228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#8C49E9] transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nahidn228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#8C49E9] transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nahidn228@gmail.com"
              className="text-3xl hover:text-[#8C49E9] transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Download Resume Button */}
          <div>
            <a
              href="/Nahid_Hasan.pdf"
              className="px-6 py-3 bg-[#8C49E9] text-white font-bold text-lg rounded-md shadow-lg hover:bg-[#6F3BD4] transition duration-300"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
