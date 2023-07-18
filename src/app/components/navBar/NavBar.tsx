import Image from "next/image";
import Logo from "../assets/logo.svg";
import NavGroup from "./NavGroup";
import RightSide from "./RightSide";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 z-50 border-b-[1px] border-[#eeefef]  ">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image src={Logo} alt="logo" width={30} />
        </a>
        <NavGroup />
        <RightSide />
      </div>
    </nav>
  );
}
