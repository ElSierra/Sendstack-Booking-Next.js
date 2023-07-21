import React, { useEffect, useState } from "react";
import Input from "./Input";

import { Trash } from "iconsax-react";
import LocationDropDown from "./LocationPicker";
import { DeliveryDetails, Location } from "@/types";
import PhoneInput from "./phoneInput";
import TransitionWrapper from "@/app/components/global/Transition";
import IconButton from "@/app/components/global/IconButton";
import { useAppSelector } from "@/store/hooks";
import { useGetDeliveryPriceMutation } from "@/store/api/sendStackApi";
import { formatMoney } from "@/app/util/numbers";
import TextArea from "./TextArea";

export type DropComponentType = {
  inValid: { id: string; valid: Boolean }[];
  idx: string;
  index: string;
  addNote: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  addPrice: (price: number, id: string) => void;
  deliveryDetail: DeliveryDetails;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onChangeLocation: (e: Location, id: string) => void;
  onClickDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx?: string
  ) => void;
};

export default function DropComponent({
  idx,
  index,
  inValid,
  addNote,
  onChange,
  onChangeLocation,
  onClickDelete,
  addPrice,
  deliveryDetail,
}: DropComponentType) {
  const [selected, setSelected] = useState<Location>(() => {
    return { name: "Pick a location", isAvailable: false, locationCode: "0" };
  });
  const [show, setShow] = useState(false);

  const userDetails = useAppSelector((state) => state.deliveryDetails.pickup);
  const [getDeliveryFee] = useGetDeliveryPriceMutation();
  useEffect(() => {
    setShow(true);
  }, []);

  const inValidFilter = inValid.find((invalid) => invalid.id === index);

  return (
    <TransitionWrapper show={show}>
      <div
        className={`border-2  border-dashed  ${
          !inValidFilter?.valid ? "border-pink-800" : ""
        } bg-white rounded-lg p-4  mt-2`}
      >
        <div className="flex justify-between w-full">
          <div></div>
          {idx !== "0" && (
            <IconButton
              ariaLabel="delete"
              onClick={(e) => {
                setShow(false);
                setTimeout(() => {
                  onClickDelete(e, idx);
                }, 100);

                e.preventDefault();
              }}
              className="p-2"
            >
              <Trash size="16" color="#FF8A65" variant="Bulk" />
            </IconButton>
          )}
        </div>
        <Input
          props={{
            name: "recipientName",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e, idx);
            },
            value: deliveryDetail.recipientName.value,
          }}
          errorMsg={"Enter Recipient name"}
          valid={deliveryDetail.recipientName.valid}
          label="Recipient Name"
        />
        <PhoneInput
          props={{
            name: "recipientNumber",
            value: deliveryDetail.recipientNumber.value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e, idx);
            },
          }}
          errorMsg="Invalid Number"
          valid={deliveryDetail.recipientNumber.valid}
          label="Recipient Number"
        />
        <PhoneInput
          props={{
            name: "altRecipientNumber",
            value: deliveryDetail.altRecipientNumber.value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e, idx);
            },
          }}
          errorMsg="Invalid Number"
          valid={deliveryDetail.altRecipientNumber.valid}
          label="Alternate Number"
        />

        <LocationDropDown
          handleLocation={(e) => {
            console.log("🚀LOCATION ~ file: DropComponent.tsx:115 ~ e:", e);
            onChangeLocation(e, idx);
            getDeliveryFee({
              pickupCode: userDetails?.locationCode as string,
              dropoffCode: e.locationCode,
              pickupDate: userDetails?.pickupDate as string,
            })
              .unwrap()
              .then((e) => {
                addPrice(e.data.price, idx);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
          selected={selected}
          setSelected={setSelected}
        />
        <Input
          label="Address"
          valid={deliveryDetail.address.valid}
          errorMsg="Please fill out this field"
          props={{
            type: "text",
            name: "address",
            label: "Address",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(e, idx);
            },
            value: deliveryDetail.address.value,
            placeholder: "10, John Street",
          }}
        />
        <TextArea
          errorMsg="Please Enter Note, Note must be greater than 3 "
          valid={deliveryDetail.note.valid}
          props={{
            onChange: (e: any) => {
              addNote(e, idx);
            },
            name: "note",
            value: deliveryDetail.note.value,
            placeholder: "Please be prompt",
          }}
        />
        <div className="flex justify-end">
          <p>{formatMoney(deliveryDetail.price || 0)}</p>
        </div>
      </div>
    </TransitionWrapper>
  );
}
