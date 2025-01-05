import Title from "./shared/Title";

const AboutMe = () => {
  return (
    <div id='about' className="bg-[#262728] text-white py-12 px-2 md:px-20 lg:px-32">
      <Title title="About Me" subTitle="" />

      <div className="card p-6 space-y-12">
        {/* Introduction Section */}
        <section className="about-me">
          <p className="text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="text-[#8C49E9] font-bold">Nahid Hasan</span>, a
            passionate web developer with a deep love for creating innovative
            and user-friendly web applications. My fascination with the
            intersection of <span className="text-[#8C49E9]">technology</span>{" "}
            and <span className="text-[#8C49E9]">creativity</span> led me to
            pursue a career in programming. I take pride in building responsive
            layouts, crafting smooth animations, and optimizing user experiences
            to make every project not only functional but also visually
            captivating.
          </p>
        </section>

      

        {/* Development Journey Section */}
        {/* <section className="my-journey shadow-xl p-10 rounded-xl bg-[#262728] border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            My Development Journey
          </h2>
          <p className="leading-relaxed">
            My journey began with curiosity about how websites and applications
            work behind the scenes. Starting with HTML and CSS, I learned how to
            structure and style websites. Discovering JavaScript introduced me
            to interactivity, and React opened the door to building dynamic,
            responsive web apps. <br />
            <br />
            To make web apps more powerful, I ventured into back-end development
            with Node.js and Express.js. Along with MongoDB, I now build
            full-stack applications that solve real-world problems and deliver
            seamless user experiences.
          </p>
        </section> */}
        <section className="why-programming shadow-xl  p-10 rounded-xl bg-gray-800 border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            My Journey in Web Development
          </h2>
          <p className="leading-relaxed">
            My journey into web development began with a curiosity about how
            websites and apps work. It started as a hobby—learning the basics of
            HTML and CSS in my free time. But as I dove deeper into JavaScript,
            React, and other technologies, I realized the potential to create
            truly dynamic and interactive web applications. The challenges I
            encountered pushed me to constantly learn and grow.
            <br />
            <br />
            Over time, I've developed a strong foundation in front-end
            development, and I've tackled real-world projects, from e-commerce
            platforms to full-stack applications. My proudest achievements so
            far include building a fully functional Movie Portal web app,
            completing a user management project with MongoDB and Firebase, and
            continuously refining my skills in modern web development tools like
            Tailwind CSS, React, and Framer Motion.
            <br />
            <br />
            Each project, challenge, and milestone has fueled my passion for
            programming, and I'm excited to continue learning and creating
            solutions that can make an impact. For me, web development isn't
            just about writing code—it's about building experiences that inspire
            and solve problems.
          </p>
        </section>

        {/* Why Programming Section */}
        <section className="why-programming shadow-xl p-10 rounded-xl bg-gray-800 border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            Why I Am in Programming
          </h2>
          <p className="leading-relaxed">
            Programming allows me to turn ideas into reality. The ability to
            solve problems, create tools that improve lives, and continuously
            learn and adapt keeps me motivated. I thrive on the challenges
            coding presents and the satisfaction of creating interactive,
            functional web apps from scratch. <br />
            <br />
            For me, programming is more than a career—it's a way to explore my
            creativity and make a meaningful impact through technology.
          </p>
        </section>

        {/* What Drives Me */}
        <section className="what-drives shadow-xl p-10 rounded-xl bg-gray-800 border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            What Drives Me
          </h2>
          <p className="leading-relaxed">
            I'm driven by the thrill of turning ideas into reality through code.
            Problem-solving is my passion—breaking down complex challenges and
            crafting elegant solutions that work seamlessly. The rapid pace of
            technology excites me, pushing me to continually learn and evolve.
            <br />
            <br />
            Building web applications that deliver real value to users is what
            fuels my creativity. Each line of code is a step toward creating
            something meaningful, and the impact of delivering a flawless,
            user-centered experience is what keeps me motivated.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
