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
          {/* <h2 className="text-3xl font-bold mb-4 text-[#8C49E9]">
            My Education
          </h2> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Master of IT (MIT) in Information Technology */}
            <div className="group relative h-96  [perspective:1000px]">
              <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="text-xl font-bold">
                        Professional Masters in Information Technology (PMIT)
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <img className="w-52 h-auto" src="/ju-logo.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="absolute w-full h-full rounded-xl bg-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <div className="absolute duration-1000 w-full h-full transform-style-preserve-3d group-hover:transform rotateX-180">
                    <div className="flex flex-col h-full">
                      <div className="text-xl font-bold mb-4">
                        Professional Masters in IT (PMIT)
                      </div>
                      <div className="education-item mb-6 px-2">
                        <p className="text-lg">
                          Institute:{" "}
                          <span className="font-bold">
                            {" "}
                            Jahangirnagar University
                          </span>{" "}
                        </p>
                        <p className="text-lg">
                          Year: <span className="font-bold">Ongoing</span>
                        </p>
                        <p className="text-lg">Semester CGPA:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            3rd Semester:{" "}
                            <span className="font-bold">4.00 out of 4</span>
                          </li>
                          <li>
                            2nd Semester:{" "}
                            <span className="font-bold">3.75 out of 4</span>
                          </li>
                          <li>
                            1st Semester:{" "}
                            <span className="font-bold">3.69 out of 4</span>
                          </li>
                        </ul>
                        <p className="text-lg">
                          Duration: <span className="font-bold">Ongoing</span>
                        </p>
                        <a
                          href="https://juniv.edu/institute/iit"
                          target="_blank"
                          className="text-lg text-black font-medium"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bachelor of Science (BSc) in Computer Science & Engineering */}
            <div className="group relative h-96  [perspective:1000px]">
              <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="text-xl font-bold">
                        Bachelor of Science (BSc) in Computer Science &
                        Engineering
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <img className="w-52 h-auto" src="/BU-logo.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="absolute w-full h-full rounded-xl bg-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="text-xl font-bold mb-4">
                      Bachelor of Science (BSc) in Computer Science &
                      Engineering
                    </div>
                    <div className="education-item mb-6 px-2">
                      <p className="text-lg">
                        Institute:
                        <span className="font-bold">
                          {" "}
                          Bangladesh University
                        </span>
                      </p>

                      <p className="text-lg">
                        Passing Year: <span className="font-bold">2022</span>
                      </p>
                      <p className="text-lg">
                        Result: <span className="font-bold">3.93 out of 4</span>
                      </p>

                      <p className="text-lg">
                        Duration: <span className="font-bold">4 years</span>
                      </p>
                      <a
                        href="https://bu.edu.bd/"
                        target="_blank"
                        className="text-lg text-black font-medium"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diploma in Engineering in Computer Engineering */}
            <div className="group relative h-96  [perspective:1000px]">
              <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="text-xl font-bold">
                        Diploma in Engineering in Computer Engineering
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <img className="w-52 h-auto " src="/LPI-logo.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="absolute w-full h-full rounded-xl bg-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="text-xl font-bold mb-4">
                      Diploma in Engineering in Computer Engineering
                    </div>
                    <div className="education-item mb-6 px-2">
                      <p className="text-lg">
                        Institute:
                        <span className="font-bold">
                          {" "}
                          Lakshmipur Polytechnic Institute
                        </span>
                      </p>

                      <p className="text-lg">
                        Passing Year: <span className="font-bold">2017</span>
                      </p>
                      <p className="text-lg">
                        Result: <span className="font-bold">3.53 out of 4</span>
                      </p>

                      <p className="text-lg">
                        Duration: <span className="font-bold">4 years</span>
                      </p>
                      <a
                        href="https://lpi.edu.bd/"
                        target="_blank"
                        className="text-lg text-black font-medium"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="education-item mb-6 ">
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
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Education;
