import Title from "./shared/Title";

const AboutMe = () => {
  return (
    <div>
      <Title title="About Me" subTitle="" />

     <div className="card p-6">
     <section className="about-me">
        <p>
          Hello! I'm Nahid Hasan, a passionate web developer with a keen interest in building innovative and user-friendly web applications. I have always been fascinated by the intersection of technology and creativity, which led me to pursue a career in programming. Whether it's creating a responsive layout, developing smooth animations, or optimizing user experience, I strive to make every project both functional and visually appealing.
        </p>
      </section>

      <section className="my-skills mt-8  shadow-xl p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p>Over the years, I have gained experience in a variety of web development technologies:</p>
        <ul className="list-disc pl-5">
          <li><strong>Front-end</strong>: HTML, CSS, JavaScript, React, TailwindCSS, DaisyUI</li>
          <li><strong>Back-end</strong>: Node.js, Express.js, MongoDB</li>
          <li><strong>Tools & Frameworks</strong>: Firebase, React Router, AOS, Swiper, Git, and more</li>
          <li><strong>Version Control</strong>: Git, GitHub</li>
          <li><strong>UI/UX</strong>: Responsive design, accessibility, user-centered design principles</li>
        </ul>
        <p className="mt-4">
          I’m always eager to learn new technologies and improve my skills to create better, more efficient applications. I enjoy staying up to date with the latest trends in web development.
        </p>
      </section>

      <section className="my-journey mt-8  shadow-xl p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4">My Development Journey</h2>
        <p>
          I began my journey in programming with a deep curiosity about how websites and applications work behind the scenes. Initially, I started with HTML and CSS, learning how to structure and style static websites. As I delved deeper, I became intrigued by JavaScript and its ability to add interactivity to websites. This sparked my interest in front-end development, and I soon started working with React to build dynamic and responsive web applications. 
          As I progressed, I realized the importance of back-end development to make web apps more powerful and scalable. I began learning Node.js and Express.js, and my experience with MongoDB helped me understand how to manage data for my applications. Today, I combine front-end and back-end skills to create full-stack solutions that cater to a variety of user needs.
        </p>
      </section>

      <section className="why-programming mt-8  shadow-xl p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4">Why I Am in Programming</h2>
        <p>
          My journey into programming wasn't a linear one, but it was a calling I couldn’t ignore. The ability to solve problems, create something from scratch, and continually evolve with new technologies is what keeps me motivated. Programming gives me a sense of fulfillment, as I can see my ideas come to life in the form of functional, interactive web apps. I love the challenge that comes with coding, the constant learning process, and the opportunity to create tools that make people's lives easier. The power of programming is limitless, and I'm excited to continue my journey, contribute to meaningful projects, and keep learning every step of the way.
        </p>
      </section>
     </div>
    </div>
  );
};

export default AboutMe;
