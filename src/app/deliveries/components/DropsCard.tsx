import { Gps, LocationTick } from "iconsax-react";
import TextComponents from "./TextComponents";
import OutlinedButton from "./OutlinedButton";

export default function DropsCard() {
  return (
    <div className="flex w-full text-sm items-center">
      <div className="flex w-20 h-28 bg-slate-900 rounded text-white text-6xl justify-center items-center">
        1
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <TextComponents>
            <LocationTick size="15" color="#FF8A65" variant="Bulk" />
            Tracking ID: 6HcFTZ
          </TextComponents>
          <OutlinedButton className="min-w-fit dp:hidden">{<><Gps size={15} variant="Bulk"/></>}</OutlinedButton>
          <OutlinedButton className="min-w-fit rsm:hidden">{<><Gps size={15} variant="Bulk"/>Track Order</>}</OutlinedButton>
        </div>
        <div className="ml-2 w-full">
          <TextComponents>Address: 4, Kolade Street, Doa</TextComponents>
          <TextComponents>Name: Tunde Something</TextComponents>
          <TextComponents>Number: 08219828921</TextComponents>
          <TextComponents>Number: 08219828921</TextComponents>
        </div>
      </div>
    </div>
  );
}
