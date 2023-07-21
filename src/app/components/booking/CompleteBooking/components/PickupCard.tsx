import { DirectDown } from "iconsax-react";
import React from "react";

export default function PickupCard() {
  return (
    <div className="flex flex-col items-center w-full  ">
      <div className="flex flex-col  w-full rounded-lg p-4 border-2 border-dashed ">
        <h1 className="font-bold mb-2">Pickup</h1>
        <p className="text-sm">Pickup Name : Ojo Isaac</p>
        <p className="text-sm">Pickup Address : 10, John Street</p>
        <p className="text-sm">Phone Number: 0909090909</p>
        <p className="text-sm">Date: Fri, July 21</p>
      </div>
      {[0,1,2].map((idx)=><div className="w-[1px] h-2 border-[1px] my-[1px]" key={idx}/>)}
      <DirectDown size="20" color="black" />
      {[0,1,2].map((idx)=><div className="w-[1px] h-2 border-[1px] my-[1px]" key={idx}/>)}
    </div>
  );
}
