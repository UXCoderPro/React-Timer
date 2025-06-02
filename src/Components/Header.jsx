import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex fixed top-9 justify-start items-center w-full h-20  lg:px-20 px-4">
      <div className=" w-auto h-16 ">
        <img src={logo} alt="logo" className="w-auto h-14" />
      </div>
    </div>
  );
};

export default Header;
