import Button from "@/app/components/global/Button";
import IconButton from "@/app/components/global/IconButton";

import { Add, Back } from "iconsax-react";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import validate from "validator";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";
import {
  DeliveryDetails,
  Drops,
  Location,
  emptyDeliveryDetails,
} from "@/types";
import { emptyOrderList } from "@/app/util/deliveryList";
import TransitionWrapper from "@/app/components/global/Transition";
import { openModal } from "@/store/local/modal";
import { addLocationDetails } from "@/store/local/deliveryDetails";
import { deliveryDetails } from "@/model/deliveryDetails";
import Modal from "../components/Modal";
import DropComponent from "../components/DropComponent";

export default function AddDeliveryDetails() {
  const dispatch = useAppDispatch();
  const fulldeliveryData = useAppSelector((state) => state.deliveryDetails);

  const [transition, setTransition] = useState(false);
  const [backColor, setBackColor] = useState("black");
  const [deliveryList, setDeliveryList] = useState<DeliveryDetails[]>(() => [
    emptyDeliveryDetails,
  ]);

  const modifyDeliveryList = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const targetName = e.target.name;
    const value = e.target.value;
    const specificDeliveryIndex = deliveryList.findIndex(
      (delivery) => delivery.id === id
    );
    if (targetName === "recipientName" || "address") {
      if (value.length < 2) {
        setDeliveryList((prev) => {
          //@ts-ignore
          prev[specificDeliveryIndex][targetName] = {
            valid: false,
            value: e.target.value,
          };
          return [...prev];
        });
        return;
      }
      setDeliveryList((prev) => {
        //@ts-ignore
        prev[specificDeliveryIndex][targetName] = {
          valid: true,
          value: e.target.value,
        };
        return [...prev];
      });
    }
    if (
      targetName === "altRecipientNumber" ||
      targetName === "recipientNumber"
    ) {
      if (!validate.isMobilePhone(value, ["en-NG"])) {
        setDeliveryList((prev) => {
          //@ts-ignore
          prev[specificDeliveryIndex][targetName] = {
            valid: false,
            value: e.target.value,
          };
          return [...prev];
        });
        return;
      }
      setDeliveryList((prev) => {
        //@ts-ignore
        prev[specificDeliveryIndex][targetName] = {
          valid: true,
          value: e.target.value,
        };
        return [...prev];
      });
    }
  };

  const modifyDeliveryListLocation = (e: Location, id: string) => {
    const specificDeliveryIndex = deliveryList.findIndex(
      (delivery) => delivery.id === id
    );

    setDeliveryList((prev) => {
      prev[specificDeliveryIndex].locationCode = {
        valid: true,
        value: e.locationCode,
      };
      return [...prev];
    });
  };
  const addPrice = (price: number, id: string) => {
    const specificDeliveryIndex = deliveryList.findIndex(
      (delivery) => delivery.id === id
    );

    setDeliveryList((prev) => {
      prev[specificDeliveryIndex].price = price;
      return [...prev];
    });
  };
  const handleAddNew = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: string
  ) => {
    setDeliveryList((prev) => [...prev, emptyOrderList(uuidv4())]);
    console.log(deliveryList);
    e.preventDefault();
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: string
  ) => {
    setDeliveryList((prev) => [...prev.filter((prev) => prev.id !== idx)]);
    console.log("fromDelete", deliveryList);
    e.preventDefault();
  };

  const [inValidList, setInValidList] = useState<
    { id: string; valid: boolean }[]
  >([]);

  const listInvalid = useMemo(() => inValidList, [inValidList]);
  console.log(
    "🚀 ~ file: index.tsx:120 ~ AddDeliveryDetails ~ listInvalid:",
    listInvalid
  );
  const canAdvance = () => {
    const validList = [];

    for (let i in deliveryList) {
      console.log(
        "🚀 ~ file: index.tsx:133 ~ canAdvance ~ deliveryList:",
        deliveryList
      );
      if (
        deliveryList[i].address.value.length < 3 ||
        deliveryList[i].recipientName.value.length < 3 ||
        !validate.isMobilePhone(deliveryList[i].recipientNumber.value, [
          "en-NG",
        ]) ||
        !validate.isMobilePhone(deliveryList[i].altRecipientNumber.value, [
          "en-NG",
        ]) ||
        deliveryList[i].locationCode.value.length < 1
      ) {
        validList.push({ id: i, valid: false });
      } else {
        validList.push({ id: i, valid: true });
      }
    }

    return validList;
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(
      "🐶",
      canAdvance().some((item) => item.valid === false)
    );
    setInValidList(canAdvance());
    if (canAdvance().some((item) => item.valid === false)) {
      dispatch(openModal({ text: "Complete the form to progress" }));
      return;
    }
    const drops: Drops[] = [];

    for (let i in deliveryList) {
      drops.push(
        new deliveryDetails(
          deliveryList[i].id,
          deliveryList[i].locationCode,
          deliveryList[i].address,
          deliveryList[i].recipientName,
          deliveryList[i].recipientNumber,
          deliveryList[i].altRecipientNumber,
          deliveryList[i].price || 0,
          deliveryList[i].note
        )
      );
    }
    console.log(
      "🚀 ~ file: index.tsx:161 ~ AddDeliveryDetails ~ drops:",
      drops
    );
    dispatch(addLocationDetails(drops));
    if (fulldeliveryData.pickup) {
      dispatch(setStep("2"));
    }
    event.preventDefault();
  };
  useEffect(() => {
    setTransition(true);
    
  }, []);

  if (!fulldeliveryData.pickup) {
    dispatch(setStep("0"));
  }
  return (
    <>
      <Modal />
      <TransitionWrapper show={transition}>
        <form>
          <div className="w-full h-full flex flex-col pb-32">
            <div className="flex items-center mb-4 justify-between">
              <h1 className=" font-bold">Drop Locations</h1>
              <Back
                size="32"
                onClick={() => {
                  setTransition(false);
                  dispatch(setStep("0"));
                }}
                color={backColor}
                onMouseOver={() => {
                  setBackColor("#00000078");
                }}
                onMouseOut={() => {
                  setBackColor("black");
                }}
                className="cursor-pointer"
                variant="Bulk"
              />
            </div>
            <p className="text-xs text-blue-950">
              * Multiple Drop Locations can be selected
            </p>
            {deliveryList.map((deliveryDetail, idx) => (
              <DropComponent
                index={idx.toString()}
                onChange={modifyDeliveryList}
                addPrice={addPrice}
                inValid={listInvalid}
                onChangeLocation={modifyDeliveryListLocation}
                deliveryDetail={deliveryDetail}
                key={deliveryDetail.id}
                idx={deliveryDetail.id}
                onClickDelete={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => handleDelete(e, deliveryDetail.id)}
              />
            ))}
            <IconButton
              onClick={(e) => handleAddNew(e, uuidv4())}
              ariaLabel="add"
              className="bg-black w-fit py-0 px-0 overflow-hidden mt-2"
            >
              <Add size="30" color="#FFFFFF" variant="Linear" />
            </IconButton>

            <Button
              props={{
                disabled: deliveryList.some((list) => list.price === 0),
              }}
              onClick={handleClick}
              className="mt-6"
            >
              Continue
            </Button>
          </div>
        </form>
      </TransitionWrapper>
    </>
  );
}
