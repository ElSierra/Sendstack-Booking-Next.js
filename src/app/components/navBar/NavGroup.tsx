"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import { Home, Receipt, Receipt1, Receipt21, TruckFast } from "iconsax-react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Twirl as Hamburger, Twirl } from "hamburger-react";
export default function NavGroup() {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <>
      <div className="inline-flex items-center  w-10 h-10 justify-center text-sm dp:hidden">
        <Twirl size={20} toggled={openDropDown} toggle={setOpenDropDown} />
      </div>

      <div className={`w-full md:block md:w-auto`}>
        <ul className="flex  flex-col rsm:hidden font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
      <NavGroupItems/>
        </ul>
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
          <NavGroupItems/>
          </ul>
        </Transition>
      </div>
    </>
  );
}


function NavGroupItems() {
  return (<>
    <NavItem name="home" title="Dashboard" Icon={Home} />
    <NavItem name="" title="Send" Icon={TruckFast} />
    <NavItem name="deliveries" title="Deliveries" Icon={Receipt21} /></>
  )
}
