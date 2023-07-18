import Button from "@/app/components/global/Button";
import IconButton from "@/app/components/global/IconButton";

import DropComponent from "../DropComponent";
import { Add, Back } from "iconsax-react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Transition } from "@headlessui/react";
import { useAppDispatch } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";

export default function AddDeliveryDetails() {
  const [locationIdx, setLocationIdx] = useState(["0"]);
  const dispatch = useAppDispatch();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  const handleAddNew = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: string
  ) => {
    setLocationIdx((prev) => [...prev, idx]);
    e.preventDefault();
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: string
  ) => {
    setLocationIdx((prev) => prev.filter((prev) => prev !== idx));
    e.preventDefault();
  };
  const [transition, setTransition] = useState(false);
  const [backColor, setBackColor] = useState("black");

  useEffect(() => {
    setTransition(true);
    console.log('rendered')
  }, []);
  return (
    <Transition
      show={transition}
      enter="transition-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
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
          {locationIdx.map((idx) => (
            <DropComponent
              key={idx}
              idx={idx}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleDelete(e, idx)
              }
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
    </Transition>
  );
}
