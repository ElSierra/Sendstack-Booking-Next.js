import Button from "@/app/components/global/Button";
import IconButton from "@/app/components/global/IconButton";

import DropComponent from "../DropComponent";
import { Add } from "iconsax-react";
import { useState } from "react";

export default function AddDeliveryDetails() {
  const [locationIdx, setLocationIdx] = useState(['0'])
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  const handleAddNew = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: string) => {
    setLocationIdx((prev)=>[...prev, idx])
    e.preventDefault();
  };

  return (
    <form>
      <div className="w-full h-full flex flex-col pb-32">
        <h1 className="mb-4 font-bold">Drop Locations</h1>
        <p className="text-xs text-blue-950">
          * Multiple Drop Locations can be selected
        </p>
        {locationIdx.map((idx) => (
          <DropComponent key={idx} idx={idx} />
        ))}
        <IconButton
          onClick={(e)=>handleAddNew(e,'1')}
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
  );
}
