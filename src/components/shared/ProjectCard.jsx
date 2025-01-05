import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="bg-[#262728] p-5 m-0 rounded-xl shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="">
        <h3 className="text-2xl font-bold text-[#8C49E9] mb-3">Project 1</h3>
        <p className="text-gray-300 mb-4">
          A brief description of the project goes here. Showcase the purpose,
          features, and technology stack used. Highlight what makes this project
          stand out.
        </p>
        <div className="flex justify-between items-center space-x-4">
          <Link
            to="#"
            className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
          >
            Live Demo
          </Link>
          <Link
            to="#"
            className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
          >
            GitHub Repo
          </Link>
          <Link
            to="#"
            className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
          >
            View Details
          </Link>
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
  );
};

export default ProjectCard;
