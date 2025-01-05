import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./shared/Title";

const Skill = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
    { name: "JavaScript", icon: <FaJs />, percentage: 75 },
    { name: "React", icon: <FaReact />, percentage: 70 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 85 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 55 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 40 },
    { name: "Firebase", icon: <SiFirebase />, percentage: 65 },
    { name: "Git", icon: <FaGitAlt />, percentage: 80 },
    { name: "Bootstrap", icon: <SiBootstrap />, percentage: 80 },
  ];
  return (
    <div id='skill' className="bg-gray-800 text-white py-12 px-2 md:px-20 lg:px-32">
      <Title title="My Skills" subTitle="" />

      <div className="card p-6 space-y-12">
        {/* Skills Section */}
        <section className="my-skills shadow-xl p-10 rounded-xl bg-[#262728] border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          {/* <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">My Skills</h2> */}
          <h3 className="text-xl font-semibold text-[#8C49E9] mb-6">
            Technologies & Tools I Use
          </h3>
          <p className="mb-4">
            I have honed my skills across a wide range of web development
            technologies. From crafting visually stunning front-end interfaces
            to building powerful back-end systems, I focus on creating seamless,
            dynamic web experiences.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[#8C49E9]">Front-end</strong>: HTML, CSS,
              JavaScript, React, TailwindCSS, DaisyUI, Bootstrap
            </li>
            <li>
              <strong className="text-[#8C49E9]">Back-end</strong>: Node.js,
              Express.js, MongoDB
            </li>
            <li>
              <strong className="text-[#8C49E9]">Tools & Frameworks</strong>:
              Firebase, React Router, AOS, Swiper, Git
            </li>
            <li>
              <strong className="text-[#8C49E9]">Version Control</strong>: Git,
              GitHub
            </li>
            <li>
              <strong className="text-[#8C49E9]">UI/UX</strong>: Responsive
              design, accessibility, user-focused design principles
            </li>
          </ul>
          <p className="mt-4">
            My commitment to continuous learning drives me to keep up with the
            latest trends in web development. Every project is an opportunity to
            refine these skills, solve unique challenges, and deliver
            exceptional results.
          </p>
        </section>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true} // Enables infinite looping
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // Keeps autoplay running after interactions
        }}
        speed={1000}
        navigation={true} // Adds navigation arrows
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-10"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 m-6 mb-10 mt-0 bg-[#262728] border border-[#8C49E9] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              {/* Skill Logo and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl text-[#8C49E9]">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-[#8C49E9]">
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>Expertise</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#8C49E9] to-[#6F3BD4] h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skill;
