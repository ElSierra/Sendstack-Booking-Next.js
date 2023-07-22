import { timeFromDate } from "@/app/util/date";
import { CalendarCircle, Clock } from "iconsax-react";
import React from "react";

export default function TimelineItem({className, time}: {className?: string, time: string}) {
  return (
    <li className="relative w-[300px] rsm:w-fit  p-2 border-2 border-dotted rounded ">
      <div className={`flex flex-row items-center min-w-[100px] ${className}`}>
        <Clock color="#3C0056" size={20} variant="Bulk" />
        <time >{timeFromDate(time)}</time>
      </div>
    </li>
  );
}
