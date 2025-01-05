import { Outlet } from "react-router-dom";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";

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
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
};

export default MainLayout;
