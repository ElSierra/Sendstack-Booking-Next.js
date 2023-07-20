import React, { useEffect, useState } from "react";
import Input from "./Input";
import IconButton from "../../global/IconButton";
import { Trash } from "iconsax-react";
import LocationDropDown from "./LocationPicker";
import { DeliveryDetails, Location } from "@/types";
import PhoneInput from "./phoneInput";
import TransitionWrapper from "../../global/Transition";

export default function DropComponent({
  idx,
  index,
  inValid,
  onChange,
  onChangeLocation,
  onClickDelete,
  deliveryDetail,
}: {
  inValid: { id: string; valid: Boolean }[];
  idx: string;
  index: string;
  deliveryDetail: DeliveryDetails;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onChangeLocation: (e: Location, id: string) => void;
  onClickDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx?: string
  ) => void;
}) {
  console.log("🚀 ~ file: DropComponent.tsx:28 ~ idx:", idx);
  const [selected, setSelected] = useState<Location>(() => {
    return { name: "Pick a location", isAvailable: false, locationCode: "0" };
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const inValidFilter = inValid.find((invalid) => invalid.id === index);
  console.log(
    "🚀 ~ file: DropComponent.tsx:38 ~ inValidFilter:",
    inValidFilter
  );
  return (
    <TransitionWrapper show={show}>
      <div
        className={`border-2 ${
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
                if (!show) {
                  onClickDelete(e);
                }
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
          errorMsg=""
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
          errorMsg=""
          valid={deliveryDetail.altRecipientNumber.valid}
          label="Alternate Number"
        />

        <LocationDropDown
          handleLocation={(e) => {
            onChangeLocation(e, idx);
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
      </div>
    </TransitionWrapper>
  );
}
