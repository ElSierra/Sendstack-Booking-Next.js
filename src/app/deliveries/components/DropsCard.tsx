"use client";

import {
  Call,
  Clock,
  CloseCircle,
  Gps,
  LocationTick,
  Profile,
  TableDocument,
} from "iconsax-react";
import TextComponents from "./TextComponents";
import OutlinedButton from "./OutlinedButton";
import { DropsResponse } from "@/types";
import { formatMoney } from "@/app/util/numbers";

import { useAppDispatch } from "@/store/hooks";

import ModalTrack from "./ModalTrack";
import { openModalTrack } from "@/store/local/modalTrack";
import { useRouter } from "next/navigation";
import DriverStatus from "./DriverStatus";

export default function DropsCard({
  drops,
  id,
}: {
  drops: DropsResponse;
  id: number;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      {/* <ModalTime/> */}
      <ModalTrack
        estimatedPickupTime={drops.estimatedPickupWindow}
        estimatedDropOffTime={drops.estimatedDropoffWindow}
      />
      <div className="flex w-full text-sm items-center mb-2">
        <div className="flex min-w-[50px] h-28 bg-slate-900 rounded text-white text-6xl justify-center items-center">
          {id + 1}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-2 border-2 border-dotted ml-2 rounded-md">
            <div className="flex justify-between items-center w-full">
              <div className="min-w-[50%] ">
                <TextComponents>
                  <span className="flex items-center w-full">
                    <LocationTick size="15" color="#a313e0" variant="Bulk" />
                    Tracking ID: {drops?.trackingId}
                  </span>
                </TextComponents>
              </div>

              <div className="">
                <OutlinedButton
                  className="min-w-fit dp:hidden"
                  onClick={() => {
                    dispatch(openModalTrack());
                  }}
                >
                  {
                    <>
                      <Clock size={15} variant="Bulk" />
                    </>
                  }
                </OutlinedButton>
                <OutlinedButton
                  className="min-w-fit rsm:hidden"
                  onClick={() => {
                    dispatch(openModalTrack());
                  }}
                >
                  {
                    <>
                      <Clock size={15} variant="Bulk" />
                      Est. Time
                    </>
                  }
                </OutlinedButton>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="min-w-[50%] ">
                <TextComponents>
                  <span className="flex items-center w-full">
                    <TableDocument size="15" color="#a313e0" variant="Bulk" />
                    Status: {drops?.status}
                  </span>
                </TextComponents>
              </div>
              <div className="">
                <OutlinedButton
                  className="min-w-fit dp:hidden"
                  onClick={() => {
                    dispatch(openModalTrack());
                  }}
                >
                  {
                    <>
                      <CloseCircle size={15} color="red" variant="Bulk" />
                    </>
                  }
                </OutlinedButton>
                <OutlinedButton
                  className="w-[80px] rsm:hidden"
                  onClick={() => {
                    dispatch(openModalTrack());
                  }}
                >
                  {
                    <>
                      <CloseCircle size={15} color="red" variant="Bulk" />
                      Cancel
                    </>
                  }
                </OutlinedButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2 border-2 border-dotted ml-2 rounded-md">
            <div className="rsm:w-[calc(100vw-10rem)]  w-fit p-2 ">
              <TextComponents>Address: {drops?.address}</TextComponents>
              <TextComponents>Recipient: {drops?.recipientName}</TextComponents>
              <TextComponents>
                Number: {drops?.recipientNumber}
                {drops?.altRecipientNumber
                  ? ` , ${drops.altRecipientNumber}`
                  : ""}
              </TextComponents>
            </div>
            <div className="flex w-full justify-end text-sm my-2 ">
              <div className="flex-col">
                <div className=" flex gap-2">
                  <div className="flex items-center">
                    <p>Amount:</p>
                  </div>
                  <p>{formatMoney(drops?.amount)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2 border-2 border-dotted ml-2 rounded-md">
              <div className="min-w-[50%] ">
              <DriverStatus statusTimeStamps = {drops.statusTimestamps} />
              </div>
            </div>
          {drops?.assignedTo && (
            <div className="flex flex-col p-2 border-2 border-dotted ml-2 rounded-md">
              <div className="min-w-[50%] ">
                <TextComponents>
                  <span className="flex items-center w-full">
                    <Profile size="15" color="#a313e0" variant="Bulk" />
                    Delivery Driver: {drops?.assignedTo?.rider?.name}
                  </span>
                </TextComponents>
                <TextComponents>
                  <span className="flex items-center w-full">
                    <Call size="15" color="#a313e0" variant="Bulk" />
                    Delivery Phone: {drops?.assignedTo?.rider?.phone}
                  </span>
                </TextComponents>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
