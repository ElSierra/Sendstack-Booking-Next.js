"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import { HambergerMenu, Home, TruckFast } from "iconsax-react";

export default function NavGroup() {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpenDropDown((prev) => !prev);
        }}
        type="button"
        className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <HambergerMenu size="40" color="black" variant="Bulk" />
      </button>
      <div
        className={`${openDropDown ? "" : "hidden"} w-full md:block md:w-auto`}
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <NavItem name='home' title="Dashboard" Icon={Home} />
          <NavItem name='/' title="Send" Icon={TruckFast} />
        </ul>
      </div>
    </>
  );
}
