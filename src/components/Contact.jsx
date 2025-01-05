import { BsWhatsapp } from "react-icons/bs";
import { FaMapLocation, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Title from "./shared/Title";

const Contact = () => {
  return (
    <div className="bg-[#262728] px-10">
      <section className="py-10 px-5 bg-[#262728]">
        <Title title={" Contact Me"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Contact Form Section */}
          <div className="border-2 border-slate-200 p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <form className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C49E9] focus:ring-opacity-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C49E9] focus:ring-opacity-50"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C49E9] focus:ring-opacity-50"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#8C49E9] hover:bg-purple-700 transition-all duration-300 rounded-md text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="text-white text-center flex flex-col items-center justify-center border-2 rounded-2xl border-slate-200 bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 space-y-4">
            <p className="text-lg flex items-center gap-2 text-[#8C49E9]">
              <FaMapLocation />{" "}
              <span className="font-semibold text-white">
                Dhaka, Bangladesh
              </span>
            </p>
            <p className="text-lg flex items-center gap-2 text-[#8C49E9]">
              {" "}
              <MdEmail />{" "}
              <span className="font-semibold text-white">
                nahidn228@gmail.com
              </span>
            </p>
            <p className="text-lg flex items-center gap-2 text-[#8C49E9]">
              <FaPhoneFlip />{" "}
              <span className="font-semibold text-white">+8801765421852</span>
            </p>
            <p className="text-lg flex items-center gap-2 text-[#8C49E9]">
              <BsWhatsapp />
              <span className="font-semibold text-white">+8801765421852</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
