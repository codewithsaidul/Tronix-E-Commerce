import { Outlet } from "react-router-dom";
import Navbar from "../component/SharedComponent/Navbar";

const Root = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 lg:px-10 font-body">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
