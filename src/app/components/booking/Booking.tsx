import CompleteBooking from "./CompleteBooking";
import CreateBooking from "./CreateBooking";

export default function Booking() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[35%] rsm:w-[100%] p-10 rsm:pb-28 dp:pb-10 rsm:px-4 bg-[#f9f9f9] overflow-auto  dp:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <CreateBooking />
      </div>
      <div className="w-[65%] rsm:hidden  p-10  overflow-auto pb-28 dp:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <CompleteBooking />
      </div>
    </div>
  );
}
