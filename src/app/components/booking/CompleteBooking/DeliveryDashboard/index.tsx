"use client";
import React, { useEffect, useState } from "react";
import TableComponent from "../components/Table";
import { Card, DirectDown } from "iconsax-react";
import PickupCard from "../components/PickupCard";
import TotalText from "../components/TotalText";
import TransitionWrapper from "@/app/components/global/Transition";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Button from "@/app/components/global/Button";
import { setStep } from "@/store/local/formStep";
import { useRequestDeliveryMutation } from "@/store/api/sendStackApi";
import { RequestDeliveryData } from "@/model/requestDeliveryData";
import { RequestDropData } from "@/model/requestDropData";
import Modal from "../../../global/Modal";
import { openModal } from "@/store/local/modal";

export default function DeliveryDashboard() {
  const [requestDelivery, requestDeliveryResponse] =
    useRequestDeliveryMutation();
  const [show, setShow] = useState(false);
  const deliveryDetails = useAppSelector((state) => state.deliveryDetails);
  const [canBook, setCanBook] = useState(false);
  const dispatch = useAppDispatch();
  const userBalance = useAppSelector((state) => state.user.bal);
  const dropsPrice = deliveryDetails.drops.reduce(
    (prev, current) => prev + current.price,
    0
  );

  useEffect(() => {
    setShow(true);

    if (userBalance > 0 && dropsPrice > 0) {
      if (userBalance > dropsPrice) {
        setCanBook(true);
      } else {
        setCanBook(false);
      }
    }
  }, [userBalance, dropsPrice]);

  if (deliveryDetails.drops.length === 0) {
    dispatch(setStep("0"));
  }
  return (
    <>
      <Modal />
      <TransitionWrapper show={show}>
        <div className="rsm:pb-20">
          <div className="w-full  border-2 rounded-lg p-2 border-dashed ">
            <div className="flex items-center  mb-5 gap-2">
              <Card size={"20"} variant="Bulk" />
              <h1 className="font-bold">Complete Booking</h1>
            </div>
            <PickupCard />
            <TableComponent />
            <TotalText />
          </div>
          <div className="flex justify-end">
            <Button
              props={{ disabled: !canBook }}
              loading={requestDeliveryResponse?.isLoading}
              className="mt-4 min-w-[8rem]"
              onClick={() => {
                const pu = deliveryDetails.pickup;
                const dp = deliveryDetails.drops;
                const dpList = [];
                for (let i in dp) {
                  dpList.push(
                    new RequestDropData(
                      dp[i].locationCode,
                      dp[i].address,
                      dp[i].recipientName,
                      dp[i].recipientNumber,
                      dp[i].altRecipientNumber,
                      dp[i].note
                    )
                  );
                }
                if (pu && dp.length > 0) {
                  requestDelivery({
                    pickup: new RequestDeliveryData(
                      pu?.address as string,
                      pu?.locationCode as string,
                      pu?.pickupName as string,
                      pu?.pickupNumber as string,
                      pu?.altPickupNumber as string,
                      pu?.pickupDate as string,
                      pu?.pickupDate as string
                    ),
                    drops: dpList,
                  })
                    .unwrap()
                    .then((e) => {
                      dispatch(setStep("3"));
                    })
                    .catch((e) => {
                      dispatch(openModal({ text: `⚠️ ${e.data?.message}` }));
                    });
                }
              }}
            >
              Book Pickup
            </Button>
          </div>
          {requestDeliveryResponse.isSuccess ? (
            <p>hkhkhkhkh</p>
          ) : (
            <p>not yet</p>
          )}
        </div>
      </TransitionWrapper>
    </>
  );
}
