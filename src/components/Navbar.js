import React from "react";

const Navbar = () => {
  return (
    <div data-testid="div1" className="bg-gray-800">
      <div data-testid="div2" className="h-20 flex items-center">
        {/* <p className="text-white px-4 font-bold">Music Player App</p> */}
        <p className="heading">Music Player App</p> 
      </div>
    </div>
  );
};

export default Navbar;
