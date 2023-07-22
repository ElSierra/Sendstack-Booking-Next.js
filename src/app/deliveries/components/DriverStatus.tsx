import { LocationTick, Truck } from "iconsax-react";
import TextComponents from "./TextComponents";
import { StatusTimeStamps } from "@/types";
import { stringDateTimeFormat } from "@/app/util/date";

export default function DriverStatus({
  statusTimeStamps,
}: {
  statusTimeStamps: StatusTimeStamps[];
}) {
  return (
    <div className="flex  flex-col">
      <TextComponents>
        <span className="flex items-center w-full">
          <Truck size="15" color="#a313e0" variant="Bulk" />
          Delivery Timeline
        </span>
      </TextComponents>
      <ol className=" relative border-l border-gray-200">
        <li className="  ml-4">
          <div className={`absolute  w-3 h-3 bg-gray-200 ${statusTimeStamps.length===0 ? 'bg-[#a313e0] animate-pulse': "bg-gray-200"} rounded-full mt-1.5 -left-1.5 border border-white`}></div>
          <time className={"mb-1 text-xs font-normal leading-none"}>🚀</time>
          <h3 className="text-xs font-semibold">{"Scheduled for pickup"}</h3>
        </li>
      </ol>

      {statusTimeStamps.map((statusTimeStamp) => (
        <ol
          key={statusTimeStamp.id}
          className=" relative border-l border-gray-200 dark:border-gray-700"
        >
          <li className="  ml-4">
            <div
              className={`absolute  w-3 h-3 ${
                statusTimeStamps[statusTimeStamps?.length - 1].id ===
                statusTimeStamp.id
                  ? "bg-[#a313e0] animate-pulse"
                  : "bg-gray-200"
              }  rounded-full mt-1.5 -left-1.5 border border-white`}
            ></div>
            <time className="mb-1 text-xs font-normal leading-none text-gray-400 ">
              {stringDateTimeFormat(statusTimeStamp?.timestamp)}
            </time>
            <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
              {statusTimeStamp.note}
            </h3>
          </li>
        </ol>
      ))}
    </div>
  );
}
