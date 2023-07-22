import React from "react";
import TimelineItem from "./TimelineItem";
import { Estimates } from "./Timeline";
import { estimatedTime } from "@/types";

export default function EstimateContainer({ estimatedTime }: {estimatedTime: estimatedTime}) {
  return (
    <div>
      <ol className="items-center w-full h-full flex justify-between">
        <TimelineItem time={estimatedTime?.start} />
        <div className="flex w-full bg-[transparent] h-[1px] border-[1px] border-dotted"></div>
        <TimelineItem time={estimatedTime?.end } className="justify-end" />
      </ol>
    </div>
  );
}
