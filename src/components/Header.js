import React from "react";
// import Socials from "./Socials";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-white sm:bg-transparent">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo  */}
        <Link to={"/"} className="max-w-[200px]">
          <h1 className="text-xl font-extrabold">MELQUIADES</h1>
          <p className="text-sm">by Steban Celemín</p>
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Manufacturing
          </Link>
          <Link
            to={"/special"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Special
          </Link>
        </nav>
      </div>
      {/* socials */}
      {/* <Socials /> */}
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
