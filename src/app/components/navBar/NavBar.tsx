import NavGroup from "./NavGroup";
import RightSide from "./RightSide";
import SendStackLogo from "../assets/Logo";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 z-50 border-b-[1px] border-[#eeefef]  ">
      <div className="  bg-white flex flex-wrap items-center justify-between mx-auto p-4 rsm:p-2">
        
          <Link href={"/"}>
            <SendStackLogo height={30} width={130} />
          </Link>
       
        <NavGroup />
        <RightSide />
      </div>
    </nav>
  );
}
