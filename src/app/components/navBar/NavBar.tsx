
import NavGroup from "./NavGroup";
import RightSide from "./RightSide";
import SendStackLogo from "../assets/Logo";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 z-50 border-b-[1px] border-[#eeefef]  ">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rsm:p-2">
        <a href="#" className="flex items-center">
         <SendStackLogo height={30} width={130}/>
   
        </a>
        <NavGroup />
        <RightSide />
      </div>
    </nav>
  );
}
