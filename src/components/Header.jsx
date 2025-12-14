import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header flex justify- items-center px-8 py-4 ">
      <div className="logo">
        <img className="w-24 h-24" src={logo} alt="logo" />
      </div>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
