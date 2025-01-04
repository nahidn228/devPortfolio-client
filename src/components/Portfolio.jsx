import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="p-5 flex justify-between items-center bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Nahid Hasan</h1>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md">
          Download Resume
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Nahid Hasan</h2>
        <p className="text-lg text-gray-300 mb-6">
          A passionate Frontend Developer building beautiful web experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nahid@example.com"
            className="text-2xl hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-5 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          I am a Frontend Developer with expertise in React, Tailwind CSS, and
          modern web technologies. I love creating responsive and dynamic user
          interfaces that provide seamless user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card Example */}
          <div className="bg-gray-800 p-5 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-3">Project 1</h3>
            <p className="text-gray-300 mb-4">
              A brief description of the project goes here. Showcase the purpose
              and technology stack used.
            </p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-purple-600 hover:underline">
                Live Demo
              </a>
              <a href="#" className="text-purple-600 hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-5 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-5 bg-gray-800 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Nahid Hasan. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
