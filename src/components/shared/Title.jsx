/* eslint-disable react/prop-types */
const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center w-3/5 mx-auto">
      <h2 className="uppercase text-3xl font-bold mb-4 text-white">{title}</h2>
      <p className="">{subTitle}</p>
    </div>
  );
};

export default Title;
