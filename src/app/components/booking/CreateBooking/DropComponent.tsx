import React from "react";
import Input from "./Input";
import IconButton from "../../global/IconButton";
import { Trash } from "iconsax-react";

export default function DropComponent({idx, onClick}:{idx:string, onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,idx?: string)=> void}) {
  return (
    <div className="border-2 bg-white rounded-lg p-4  mt-2">
      <div className="flex justify-between w-full">
        <div></div>
        {idx!=='0' && <IconButton ariaLabel="delete" onClick={onClick} className="p-2">
          <Trash size="16" color="#FF8A65" variant="Bulk" />
        </IconButton>}
      </div>
      <Input type="text" label="Name" placeholder="Your Name" />
      <Input type="text" label="Number" placeholder="09012345678" />
      <Input type="text" label="Address" placeholder="10, John Street," />
    </div>
  );
}
