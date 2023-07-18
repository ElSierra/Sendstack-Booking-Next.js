import Button from "@/app/components/global/Button";

import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import TextArea from "../TextArea";
import Input from "../Input";
import { useAppDispatch } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";
import { Transition } from "@headlessui/react";

export default function AddUserDetails() {
  const dispatch = useAppDispatch();
  const [transition,setTransition] = useState(false)

  const handleClick = () => {
    dispatch(setStep("1"));
  };

  useEffect(() => {
    setTransition(true);
   
  }, []);
  return (
    <Transition
    show={transition}
    enter="transition-opacity ease-linear duration-100"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-linear duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <form>
      <div className="w-full h-full flex flex-col">
        <h1 className=" font-bold">Send Item</h1>
        <p className="text-xs">Input your details </p>
        <hr className="my-2" />
        <Input type="text" label="Name" placeholder="Your Name" />
        <Input type="text" label="Number" placeholder="09012345678" />
        <Input type="text" label="Address" placeholder="10, John Street," />
        <TextArea />
        <DatePicker label="Pickup Date" />
        <Button onClick={handleClick} className="mt-6">
          Continue
        </Button>
      </div>
    </form></Transition>
  );
}
