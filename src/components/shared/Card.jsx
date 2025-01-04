const Card = () => {
  return (
    <>
      <div className="card bg-[#272829] w-64 shadow-lg rounded-xl p-4">
        <figure className="mb-4">
          <img
            src="/tailwindCSS.png"
            alt="Shoes"
            className="rounded-lg w-full h-40 object-cover"
          />
        </figure>
        <div className="card-body text-center p-0">
          <h2 className="card-title text-2xl font-semibold text-white mb-2">
            Shoes!
          </h2>
          <p className="text-sm text-white opacity-80">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions mt-4">
            <button className="btn btn-sm bg-white text-black hover:bg-orange-600 hover:text-white border-0 rounded-full transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
