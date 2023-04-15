import React from "react";
import PropTypes from "prop-types";
import { Target } from "lucide-react";
const Navbar = () => {
  return (
    <div className="border-b h-16 flex items-center justify-between px-4 ">
      <div className="">
        <div className="text-black flex gap-1 items-center font-bold ">
          <Target className="" />
          <p>Equilibrium</p>
        </div>
      </div>
      {/* <div>Button</div> */}
    </div>
  );
};

export default Navbar;
