import {
  FaCogs,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold flex items-center gap-2 transition duration-300"
              : "hover:text-orange-500 text-white font-semibold flex items-center gap-2 transition duration-300"
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold flex items-center gap-2 transition duration-300"
              : "hover:text-orange-500 text-white font-semibold flex items-center gap-2 transition duration-300"
          }
        >
          <FaUser />
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-skill"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold flex items-center gap-2 transition duration-300"
              : "hover:text-orange-500 text-white font-semibold flex items-center gap-2 transition duration-300"
          }
        >
          <FaCogs />
          My Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold flex items-center gap-2 transition duration-300"
              : "hover:text-orange-500 text-white font-semibold flex items-center gap-2 transition duration-300"
          }
        >
          <FaGraduationCap />
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold flex items-center gap-2 transition duration-300"
              : "hover:text-orange-500 text-white font-semibold flex items-center gap-2 transition duration-300"
          }
        >
          <FaFolderOpen />
          Projects
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black shadow-lg fixed max-w-screen-xl mx-auto z-10 ">
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
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold ">
          {" "}
          <img className="w-14 hidden lg:flex" src="/NahidHasan.png" alt="" />
          Nahid <span className="text-orange-500">Hasan</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="/resume.pdf"
          className="btn btn-outline btn-warning text-black font-bold hover:bg-orange-600 transition duration-300"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
