/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { project_name, project_url, github_url, description, project_image } =
    project || {};
  return (
    <div className="bg-[#262728] p-5 m-0 rounded-xl shadow-xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="">
        <h3 className="text-2xl font-bold text-[#8C49E9] mb-3">
          {project_name}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center space-x-4">
          <Link
            to={project_url}
            className="text-purple-600 hover:text-[#8C49E9] transition-all duration-300"
          >
            Live Demo
          </Link>
          <Link
            to={github_url}
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
          src={project_image}
          alt="PaddyPet"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
