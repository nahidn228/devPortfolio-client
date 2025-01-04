const Projects = () => {
  return (
    <div className="bg-gray-800">
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="w-11/12 md:w-10/12 mx-auto ">
          {/* Project Card Example */}
          <div className="bg-[#262728] p-5 rounded-xl shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="">
              <h3 className="text-2xl font-bold text-[#8C49E9] mb-3">
                Project 1
              </h3>
              <p className="text-gray-300 mb-4">
                A brief description of the project goes here. Showcase the
                purpose, features, and technology stack used. Highlight what
                makes this project stand out.
              </p>
              <div className="flex justify-between items-center space-x-4">
                <a
                  href="#"
                  className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className="w-full">
              <img
                src="/PaddyPet.jpg"
                alt="PaddyPet"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
