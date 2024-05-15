import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-green-700 text-black py-2">
      <div className="Cal">
        <span className="font-bold text-2xl mx-8"> Cal-C </span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold trainsion-all">Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
