import Title from "./shared/Title";

const Education = () => {
  return (
    <div
      id="education"
      className="bg-[#262728] text-white py-12 px-6 md:px-20 lg:px-32"
    >
      <Title title="Education" subTitle="" />

      <div className="card p-2 md:p-6 space-y-12">
        {/* Education Section */}
        <section className="education shadow-xl p-10 rounded-xl bg-gray-800 border border-[#8C49E9] transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            My Education
          </h2>

          <div className="education-item mb-6 ">
            <h3 className="text-xl font-semibold text-[#8C49E9]">
              Master of IT (MIT) in Information Technology
            </h3>
            <p className="text-lg">Institute: Jahangirnagar University</p>
            <p className="text-lg">
              Result: <span className="text-[#8C49E9]">Running</span>
            </p>
            <p className="text-lg">
              Year: <span className="text-[#8C49E9]">Running</span>
            </p>
            <p className="text-lg">
              Thesis:{" "}
              <span className="text-[#8C49E9]">Thesis Defense Coming Soon</span>
            </p>
            <p className="text-lg">Semester CGPA:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                3rd Semester:{" "}
                <span className="text-[#8C49E9]">4.00 out of 4</span>
              </li>
              <li>
                2nd Semester:{" "}
                <span className="text-[#8C49E9]">3.75 out of 4</span>
              </li>
              <li>
                1st Semester:{" "}
                <span className="text-[#8C49E9]">3.69 out of 4</span>
              </li>
            </ul>
            <p className="text-lg">
              Duration: <span className="text-[#8C49E9]">--</span>
            </p>
          </div>

          <div className="education-item mb-6">
            <h3 className="text-xl font-semibold text-[#8C49E9]">
              Bachelor of Science (BSc) in Computer Science & Engineering
            </h3>
            <p className="text-lg">Institute: Bangladesh University</p>
            <p className="text-lg">
              Result: CGPA:{" "}
              <span className="text-[#8C49E9]">3.93 out of 4</span>
            </p>
            <p className="text-lg">
              Year: <span className="text-[#8C49E9]">2023</span>
            </p>
            <p className="text-lg">
              Duration: <span className="text-[#8C49E9]">4 years</span>
            </p>
          </div>

          <div className="education-item">
            <h3 className="text-xl font-semibold text-[#8C49E9]">
              Diploma in Engineering in Computer Engineering
            </h3>
            <p className="text-lg">
              Institute: Lakshmipur Polytechnic Institute
            </p>
            <p className="text-lg">
              Result: CGPA:{" "}
              <span className="text-[#8C49E9]">3.53 out of 4</span>
            </p>
            <p className="text-lg">
              Year: <span className="text-[#8C49E9]">2017</span>
            </p>
            <p className="text-lg">
              Duration: <span className="text-[#8C49E9]">4 years</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
