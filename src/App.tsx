import React from "react";
import Navbar from "./Components/Navbar";
import Asidebar from "./Components/Asidebar";
import Blogs from "./Components/Blogs";
import { Outlet } from "react-router-dom";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="mx-28">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
