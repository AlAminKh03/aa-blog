import { Link } from "react-router-dom";
import logo from "../assets/images/logo_transparent.png";
const Navbar = () => {
  return (
    <nav className="py-4 border-b px-4 relative my-10 min-w-full ">
      <div className="fixed min-w-full top-0 right-0 bg-white px-28 py-4">
        <div className="flex items-end justify-between ">
          {/* <!-- logo --> */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="search" className="w-48 h-14 bg-black" />
            </Link>
          </div>
          {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
          <div className="auth-buttons">
            <button className=" bg-black py-1 px-4 rounded-sm text-white font-semibold mx-2">
              sign in
            </button>
            <button className=" bg-white border border-black py-1 px-4 rounded-sm text-black font-semibold">
              sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
