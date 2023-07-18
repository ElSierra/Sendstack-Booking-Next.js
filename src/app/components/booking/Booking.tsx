import CreateBooking from "./CreateBooking";

export default function Booking() {
  return (
    <div className="flex w-full">
      <div className="w-[40%] rsm:w-[100%] p-10 bg-[#f9f9f9] overflow-auto">
        <CreateBooking />
      </div>
      <div className="w-[60%] rsm:hidden  p-10">sssssssss</div>
    </div>
  );
}
