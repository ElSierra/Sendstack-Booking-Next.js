import Button from "@/app/components/global/Button";
import IconButton from "@/app/components/global/IconButton";

import DropComponent from "../DropComponent";
import { Add, Back } from "iconsax-react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Transition } from "@headlessui/react";
import { useAppDispatch } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";
import { DeliveryDetails, Location, emptyDeliveryDetails } from "@/types";
import { emptyOrderList } from "@/app/util/deliveryList";
import TransitionWrapper from "@/app/components/global/Transition";

export default function AddDeliveryDetails() {
  const [locationIdx, setLocationIdx] = useState(["0"]);
  const dispatch = useAppDispatch();

  const [transition, setTransition] = useState(false);
  const [backColor, setBackColor] = useState("black");
  const [deliveryList, setDeliveryList] = useState<DeliveryDetails[]>([
    emptyDeliveryDetails,
  ]);

  const modifyDeliveryList = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const specificDeliveryIndex = deliveryList.findIndex(
      (delivery) => delivery.id === id
    );

    setDeliveryList((prev) => {
      const targetName = e.target.name;
      //@ts-ignore
      prev[specificDeliveryIndex][targetName] = {
        valid: true,
        value: e.target.value,
      };
      return [...prev];
    });
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
    setDeliveryList((prev) => prev.filter((prev) => prev.id !== idx));
    e.preventDefault();
  };
  useEffect(() => {
    setTransition(true);
    console.log("rendered");
  }, []);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(deliveryList);
    event.preventDefault();
  };

  return (
    <TransitionWrapper show={transition}>
      <form>
        <div className="w-full h-full flex flex-col pb-32">
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
          <h1 className="mb-4 font-bold">Drop Locations</h1>
          <p className="text-xs text-blue-950">
            * Multiple Drop Locations can be selected
          </p>
          {deliveryList.map((deliveryDetail) => (
            <DropComponent
              onChange={modifyDeliveryList}
              onChangeLocation = {modifyDeliveryListLocation}
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
          <Button onClick={handleClick} className="mt-6">
            Continue
          </Button>
        </div>
      </form>
    </TransitionWrapper>
  );
}
