import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero text-white min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12 md:px-20 py-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C49E9] to-[#6F3BD4] rounded-full blur-lg scale-110"></div>
          <img
            src="/NahidHero.png"
            className="w-full h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-[#8C49E9] object-cover relative"
            alt="Nahid Hasan"
          />
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8C49E9] to-[#6F3BD4] animate-pulse">
            I'm <span className="text-6xl font-bold">Nahid Hasan</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            A passionate{" "}
            <span className="text-[#8C49E9] font-semibold">MERN Developer</span>{" "}
            crafting beautiful and seamless web experiences with modern
            technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <a
              href="https://github.com/nahidn228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl bg-gray-700 p-3 rounded-full hover:bg-[#8C49E9] transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nahidn228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl bg-gray-700 p-3 rounded-full hover:bg-[#8C49E9] transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nahidn228@gmail.com"
              className="text-4xl bg-gray-700 p-3 rounded-full hover:bg-[#8C49E9] transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Download Resume Button */}
          <div>
            <a
              href="/Nahid_Hasan.pdf"
              className="px-8 py-4 bg-gradient-to-r from-[#8C49E9] to-[#6F3BD4] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
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
