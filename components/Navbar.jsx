"use client";

import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownPos, setDropdownPos] = useState(0);

  const handleDropdown = () => {
    if (dropdown === false) {
      setDropdown(true);
      setDropdownPos("0");
    } else {
      setDropdown(false);
      setDropdownPos("100");
    }
  };

  return (
    <div>
      {/* Desktop */}
      <nav className="sm:flex hidden m-4 justify-between">
        <div className="ml-20 text-lg">
          <h1 className="text-blue-600 font-semibold">Muavia Ghazi</h1>
        </div>

        <div className="flex mr-20 gap-5">
          <button>Home</button>
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="sm:hidden m-4 ">
        <div className="flex justify-between">
          <div className="text-2xl">
            <h1 className="text-blue-600 font-semibold">Muavia Ghazi</h1>
          </div>

          <button onClick={handleDropdown} className="">
            <Menu fontSize="large" />
          </button>
        </div>

        {/* {dropdown === true ? ( */}
        <div
          className="absolute flex flex-col w-full left-0 bg-white p-4 gap-2 transition-transform ease-out duration-500"
          style={{ transform: `translateX(${dropdownPos}vw)` }}
        >
          <button>Home</button>
          <button>About</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        {/* ) : (
          <></>
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;
