import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./shared/ProjectCard";

// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  return (
    <div id="project" className="bg-gray-800 pt-10">
      <section className="pb-0 px-5">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Projects
        </h2>
        <div className="w-11/12 md:w-10/12 mx-auto pb-10">
          {" "}
          {/* Ensure height */}
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
            modules={[Navigation, Autoplay]}
            className="mySwiper mt-10 "
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
