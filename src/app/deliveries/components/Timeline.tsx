import { CalendarCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem";
import { estimatedTime } from "@/types";
import EstimateContainer from "./EstimateContainer";
export type Estimates = {
  estimatedPickupTime: estimatedTime;
  estimatedDropOffTime: estimatedTime;
};
export default function Timeline({
  estimatedPickupTime,
  estimatedDropOffTime,
}: Estimates) {
  return (
    <div className="rsm:w-[calc(100vw-6rem)] items-center flex-col w-full flex overflow-x-auto overflow-y-clip min-h-full">
      <div className="flex flex-col p-2 border-[1px] border-dotted rounded-lg items-center">
        <div className='bg-slate-200 p-1 mb-2 rounded-lg w-fit text-sm font-bold'><p>Estimated Pickup Time</p></div>
        <EstimateContainer estimatedTime={estimatedPickupTime} />
      </div>
      <div className="flex flex-col p-2  border-[1px] border-dotted mt-2 rounded-lg items-center">
      <div className='bg-slate-200 p-1  mb-2  rounded-lg w-fit text-sm font-bold'><p>Estimated Delivery Time</p></div>
        <EstimateContainer estimatedTime={estimatedDropOffTime} />
      </div>
    </div>
  );
}
