import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
