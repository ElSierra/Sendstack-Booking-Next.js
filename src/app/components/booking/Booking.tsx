import CompleteBooking from "./CompleteBooking";
import CreateBooking from "./CreateBooking";

export default function Booking() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[40%] rsm:w-[100%] p-10 pb-80 rsm:p-4 bg-[#f9f9f9] overflow-auto">
        <CreateBooking />
      </div>
      <div className="w-[60%] rsm:hidden  p-10"><CompleteBooking/></div>
    </div>
  );
}
