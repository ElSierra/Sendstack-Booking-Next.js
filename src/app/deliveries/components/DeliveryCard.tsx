import { Forward, MessageText } from "iconsax-react";
import OutlinedButton from "./OutlinedButton";
import TextComponents from "./TextComponents";
import DropsCard from "./DropsCard";

export default function DeliveryCard() {
  return (
    <div className="flex w-full p-4 border-2 border-dotted rounded-lg flex-col ">
      <div className="flex flex-col w-full  justify-between">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-ellipsis w-[92%] whitespace-nowrap overflow-hidden">
            OrderID: 9890898080808080
          </h1>
          <div className="flex items-center min-w-[90px]">
            <MessageText size="20" color="#FF8A65" variant="Bulk" />
            <p className="text-sm">OTP: 2444</p>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 text-sm">
          <p>Pickup date: Monday 25</p>
          <div className="h-4 w-[2px] bg-red-500"></div>
          <div className="flex w-20 gap-1 items-center">
            <Forward variant="Bulk" /> <p>Paid</p>
          </div>
        </div>

        <TextComponents>
          Pickup Address: Holy dew divine Olayemi road megida bus stop ipaja
          Ayobo
        </TextComponents>
        <TextComponents>Recipient Name: Shols Nasri Ayobo</TextComponents>
        <TextComponents>Receipent Phone: 080808080 , 080808080</TextComponents>
        <TextComponents>Note: Please be prompt</TextComponents>
      </div>
      <hr className="my-2" />
      <DropsCard />
      <div></div>
    </div>
  );
}
