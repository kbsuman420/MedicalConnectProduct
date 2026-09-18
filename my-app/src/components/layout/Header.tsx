import React from "react";
import "../../index.css";

const Header = () => {
  return (
    <div className="w-full">
      <div className="navbar px-1.5 md:p-2">
        <a className="text-lg md:text-2xl font-bold ml-2" href="#"><span className="text-white">Med</span><span className="text-blue-500">Connect</span></a>
        <div className="flex p-2 gap-2 text-xs md:text-sm">
          <a href="#" className="tap bg-blue-500 rounded-full text-center px-3 py-1">
            Login
          </a>
          <a href="#" className="tap bg-red-500 rounded-full px-3 py-1">
            SOS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
