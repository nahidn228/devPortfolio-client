const Contact = () => {
  return (
    <div className="bg-[#262728]">
      <section className="py-10 px-5 bg-[#262728]">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 bg-gray-900 text-white rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
