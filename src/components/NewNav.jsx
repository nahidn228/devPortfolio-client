import {
  FaCode,
  FaCogs,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";


const NewNav = () => {
  const navLinks = (
    <>
      <li className="relative group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <FaHome />
          <span className="lg:hidden"> Home</span>
        </NavLink>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          Home
        </span>
      </li>
      <li className="relative group">
        <a
          to=""
          href='#about'
          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <FaUser />
          <span className="lg:hidden"> About Me</span>
        </a>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          About
        </span>
      </li>
      <li className="relative group">
        <a
          to=""
          href='#skill'
          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <FaCogs />
          <span className="lg:hidden">Skills</span>
        </a>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          Skills
        </span>
      </li>
      <li className="relative group">
        <a
          href="#education"

          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <FaGraduationCap />
          <span className="lg:hidden">Education</span>
        </a>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          Education
        </span>
      </li>
      <li className="relative group">
        <a
          href="#project"
          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <FaFolderOpen />
          <span className="lg:hidden">Projects</span>
        </a>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          Projects
        </span>
      </li>
      <li className="relative group">
        <a
          href="#contact"
          className={({ isActive }) =>
            isActive
              ? "bg-[#8C49E9] p-2 font-bold transition duration-300"
              : "hover:bg-[#8C49E9] p-2 text-white font-semibold transition duration-300"
          }
        >
          <TfiEmail /> <span className="lg:hidden">Contact</span>
        </a>

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-[#262728] rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ">
          Contact
        </span>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#131415] text-white shadow-lg fixed max-w-screen-xl mx-auto z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-48 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        {/* Large device Logo */}
        <div className="md:flex items-center space-x-1 btn btn-ghost hidden ">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-[#8C49E9] text-white rounded-full shadow-lg">
            <FaCode size={24} />
          </div>
          {/* Text */}
          <h1 className="text-2xl font-bold text-[#8C49E9]">
            <span className="text-white">Nahid</span>Hasan
          </h1>
        </div>

        {/* small device logo */}
        <div className="flex md:hidden items-center space-x-3">
      {/* Icon */}
      <div className="flex  items-center justify-center w-10 h-10 bg-[#8C49E9] text-white rounded-full shadow-lg">
        <FaCode size={24} />
      </div>
      {/* Text */}
      <h1 className="text-2xl font-bold text-[#8C49E9]">
        <span className="text-white">N</span>H
      </h1>
    </div>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal bg-[#262728] rounded-lg text-xl px-2 space-x-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/Resume_of_Nahid_Hasan.pdf"
          className="btn btn-outline bg-[#262728] btn-sm md:btn-md  text-white font-bold hover:bg-[#8C49E9] transition duration-300"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default NewNav;
