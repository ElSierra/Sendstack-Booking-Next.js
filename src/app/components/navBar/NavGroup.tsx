"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import { HambergerMenu, Home, TruckFast } from "iconsax-react";
import { Transition } from "@headlessui/react";

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
        className={`w-full md:block md:w-auto`}
      >
        <Transition
          show={openDropDown}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <ul className="flex  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <NavItem name="home" title="Dashboard" Icon={Home} />
            <NavItem name="/" title="Send" Icon={TruckFast} />
          </ul>
        </Transition>
      </div>
    </>
  );
}
