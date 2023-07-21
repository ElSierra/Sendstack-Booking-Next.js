import { useAppSelector } from "@/store/hooks";
import { DirectDown } from "iconsax-react";
import React from "react";

export default function PickupCard() {
  const pickupDetail = useAppSelector((state) => state.deliveryDetails.pickup);
  return (
    <div className="flex flex-col items-center w-full  ">
      <div className="flex flex-col  w-full rounded-lg p-4 border-2 border-dashed ">
        <h1 className="font-bold mb-2">Pickup</h1>
        <p className="text-sm">{`Pickup Name : ${pickupDetail?.pickupName}`}</p>
        <p className="text-sm">{`Pickup Address : ${pickupDetail?.address}`}</p>
        <p className="text-sm">{`Phone Number: ${pickupDetail?.pickupNumber}`}</p>
        <p className="text-sm">{`Alt Number: ${pickupDetail?.altPickupNumber}`}</p>
        <p className="text-sm">{`Note: ${pickupDetail?.note}`}</p>
        <p className="text-sm">{`Weight(KG): ${pickupDetail?.kg}`}</p>
      </div>
      {[0, 1, 2].map((idx) => (
        <div className="w-[1px] h-2 border-[1px] my-[1px]" key={idx} />
      ))}
      <DirectDown size="20" color="black" />
      {[0, 1, 2].map((idx) => (
        <div className="w-[1px] h-2 border-[1px] my-[1px]" key={idx} />
      ))}
    </div>
  );
}
