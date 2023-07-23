"use client";
import NavItemMobile from "./NavItemMobile";
import { Home, TruckFast, Receipt21 } from "iconsax-react";

export default function NavBarBottom() {
  return (
    <nav className="w-full fixed dp:hidden bottom-0 z-50 border-t-[1px] border-[#eeefef]  ">
      <div className="  bg-white flex flex-wrap items-center justify-between px-20  p-4 rsm:p-2">
        <NavItemMobile name="home" title="Dashboard" Icon={Home} />
        <NavItemMobile name="" title="Send" Icon={TruckFast} />
        <NavItemMobile name="deliveries" title="Deliveries" Icon={Receipt21} />
      </div>
    </nav>
  );
}
