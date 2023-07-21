import { setCookie } from "cookies-next";
import Booking from "./components/booking/Booking";
import { useGetBalanceQuery } from "@/store/api/sendStackApi";


export default function Home() {

  return (
    <main className="fixed min-h-screen w-full pt-[4rem] rsm:pt-[3.5rem]">
      <Booking />
    </main>
  );
}
