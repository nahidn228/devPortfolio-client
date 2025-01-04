import Title from "./shared/Title";

const Skill = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-2 md:px-20 lg:px-32">
      <Title title="My Skills" subTitle="" />

      <div className="card p-6 space-y-12">
        {/* Skills Section */}
        <section className="my-skills shadow-xl p-10 rounded-xl bg-[#262728] border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          {/* <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">My Skills</h2> */}
          <h3 className="text-xl font-semibold text-[#8C49E9] mb-6">Technologies & Tools I Use</h3>
          <p className="mb-4">
            I have honed my skills across a wide range of web development technologies. From crafting visually stunning front-end interfaces to building powerful back-end systems, I focus on creating seamless, dynamic web experiences.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[#8C49E9]">Front-end</strong>: HTML, CSS, JavaScript, React, TailwindCSS, DaisyUI, Bootstrap
            </li>
            <li>
              <strong className="text-[#8C49E9]">Back-end</strong>: Node.js, Express.js, MongoDB
            </li>
            <li>
              <strong className="text-[#8C49E9]">Tools & Frameworks</strong>: Firebase, React Router, AOS, Swiper, Git
            </li>
            <li>
              <strong className="text-[#8C49E9]">Version Control</strong>: Git, GitHub
            </li>
            <li>
              <strong className="text-[#8C49E9]">UI/UX</strong>: Responsive design, accessibility, user-focused design principles
            </li>
          </ul>
          <p className="mt-4">
            My commitment to continuous learning drives me to keep up with the latest trends in web development. Every project is an opportunity to refine these skills, solve unique challenges, and deliver exceptional results.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Skill;
