import { Outlet } from "react-router-dom";
import NewNav from "../components/NewNav";

const MainLayout = () => {
  return (
    <div className="bg-[#111213]">
      <header className="">
        {/* <Navbar /> */}
        <NewNav />
      </header>

      <main className=" pt-20">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
