import axios from "axios";
import { cookies } from "next/headers";
import DeliveryCard from "./components/DeliveryCard";
import { DeliveryResponse } from "@/types";

export default async function Deliveries() {
  const nextCookies = cookies();
  const auth = JSON.parse(nextCookies.get("ss-auth")?.value || "{}");
  console.log("🚀 ~ file: page.tsx:7 ~ Deliveries ~ auth:", auth);
  const fetchDeliveries = async () => {
    try {
      const deliveries = await axios.get(
        "https://sandbox.sendstack.africa/api/v1/deliveries",
        {
          headers: {
            app_id: auth?.appId,
            app_secret: auth?.appSecret,
          },
        }
      );
      return deliveries.data;
    } catch (e) {
      return null;
    }
  };
  const deliveries: DeliveryResponse = await fetchDeliveries();
  console.log(
    "🚀 ~ file: page.tsx:25 ~ Deliveries ~ deliveries:",
    deliveries?.data?.results[0]?.drops
  );
  return (
    <main className=" min-h-screen w-full pt-[6rem] pb-[6rem] overflow-auto rsm:pt-[5.5rem] px-12 rsm:px-2">
      {deliveries?.data?.results?.map((deliveryData,idx) => (
        <DeliveryCard DeliveryData={deliveryData} key={deliveryData.id} id={idx}/>
      ))}
    </main>
  );
}
