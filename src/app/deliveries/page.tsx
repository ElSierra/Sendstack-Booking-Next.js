import axios from "axios";
import { cookies } from "next/headers";
import DeliveryCard from "./components/DeliveryCard";

export default async function Deliveries() {
  const nextCookies = cookies();
  const auth = JSON.parse(nextCookies.get("ss-auth")?.value || "{}");
  console.log("🚀 ~ file: page.tsx:7 ~ Deliveries ~ auth:", auth);
  // const fetchDeliveries = async () => {
  //   try {
  //     const deliveries = await axios.get(
  //       "https://sandbox.sendstack.africa/api/v1/deliveries",
  //       {
  //         headers: {
  //           app_id: auth?.appId,
  //           app_secret: auth?.appSecret,
  //         },
  //       }
  //     );
  //     return deliveries.data;
  //   } catch (e) {
  //     return null;
  //   }
  // };
  // const deliveries = await fetchDeliveries();
  console.log("🚀 ~ file: page.tsx:25 ~ Deliveries ~ deliveries:" );
  return (
    <main className="fixed min-h-screen w-full pt-[6rem] rsm:pt-[5.5rem] px-2">
      <DeliveryCard/>
    </main>
  );
}
