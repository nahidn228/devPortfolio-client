import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./shared/ProjectCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <div className="bg-gray-800 pt-10">
      <section className="pb-0 px-5">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Projects
        </h2>
        <div className="w-11/12 md:w-10/12 mx-auto h-[80vh]">
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
            modules={[ Navigation, Autoplay]}
            className="mySwiper mt-10"
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="m-8 my-10">
                  <ProjectCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
