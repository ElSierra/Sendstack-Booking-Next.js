import { setCookie } from "cookies-next";
import Booking from "./components/booking/Booking";


export default function Home() {
 
  return (
    <main className="fixed min-h-screen w-full pt-[4rem] rsm:pt-[4.5rem]">
      <Booking />
    </main>
  );
}
