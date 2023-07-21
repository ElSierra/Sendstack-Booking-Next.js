import { formatMoney } from "@/app/util/numbers";
import { useAppSelector } from "@/store/hooks";

export default function TotalText() {
  const pickupDetail = useAppSelector((state) => state.deliveryDetails.drops);
  const user = useAppSelector((state)=>state.user)
  const dropsPrice = pickupDetail.reduce(
    (prev, current) => prev + current.price,
    0
  );
  return (
    <div className="flex w-full justify-end text-sm my-2 ">
      <div className="flex-col w-[50%] rsm:w-full">
      <div className=" flex justify-between">
          <p>Wallet Balance:</p>
          <p>{formatMoney(user.bal)}</p>
        </div>
        <div className=" flex justify-between">
          <p>Delivery Fee:</p>
          <p>{formatMoney(dropsPrice)}</p>
        </div>
      
      </div>
    </div>
  );
}
