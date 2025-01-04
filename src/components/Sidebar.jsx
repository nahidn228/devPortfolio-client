const Sidebar = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Nahid Hasan</h2>
        <p>Joniour web developer</p>
        <p>Dhaka, Bangladesh</p>
        <div className="card-actions">
          <button className="btn btn-primary">Lets Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
