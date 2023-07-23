import { Calculator, Forward, MessageText } from "iconsax-react";
import OutlinedButton from "./OutlinedButton";
import TextComponents from "./TextComponents";
import DropsCard from "./DropsCard";
import { DeliveryResponseResult } from "@/types";
import { stringDateFormat } from "@/app/util/date";
import { formatMoney } from "@/app/util/numbers";
import React, { useState } from "react";
import Button from "./OutlinedButton";
import TransitionWrapper from "@/app/components/global/Transition";

function DeliveryCard({
  DeliveryData,
  id,
}: {
  DeliveryData: DeliveryResponseResult;
  id: number;
}) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex w-full p-4 border-2 border-dotted mb-6 rounded-lg flex-col ">
      <div className="flex flex-col w-full  justify-between">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-ellipsis w-[92%] whitespace-nowrap overflow-hidden">
            {`OrderID:${DeliveryData?.id}`}
          </h1>
          <div className="flex items-center min-w-[90px]">
            <p className="text-sm">OTP: {DeliveryData.otp}</p>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 text-sm">
          <p>
            Pickup date: {stringDateFormat(DeliveryData?.pickup?.pickupDate)}
          </p>
          <div className="h-4 w-[2px] bg-red-500"></div>
          <div className="flex w-20 gap-1 items-center">
            <Forward variant="Bulk" /> <p>{DeliveryData?.paymentStatus}</p>
          </div>
        </div>

        <TextComponents>
          Pickup Address: {DeliveryData?.pickup?.address}
        </TextComponents>
        <TextComponents>
          Pickup Name: {DeliveryData?.pickup?.pickupName}
        </TextComponents>
        <TextComponents>
          Pickup Phone: {DeliveryData?.pickup?.pickupNumber} ,{" "}
          {DeliveryData?.pickup?.altPickupNumber}
        </TextComponents>
        <TextComponents>Note: {DeliveryData?.pickup?.note}</TextComponents>
      </div>
      <hr className="my-2" />
      <Button
        className=""
        onClick={(e: any) => {
          handleShow();
        }}
      >
        {!show ? "Show Drops" : "Hide Drops"}
      </Button>
      <TransitionWrapper show={show}>
        {DeliveryData?.drops?.map((drops, idx) => (
          <DropsCard key={drops.id} drops={drops} delivId={DeliveryData.id} id={idx} />
        ))}
      </TransitionWrapper>
      <hr className="my-2" />
      <div className="flex w-full justify-end text-sm my-2 ">
        <div className="flex-col w-[30%] rsm:w-full">
          <div className=" flex justify-between">
            <div className="flex items-center">
              <Calculator variant="Bulk" size={20} /> <p>Total:</p>
            </div>
            <p>{formatMoney(DeliveryData?.totalAmount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryCard;
