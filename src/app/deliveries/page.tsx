import axios from "axios";
import { cookies } from "next/headers";
import DeliveryCard from "./components/DeliveryCard";
import { DeliveryResponse } from "@/types";
import Home from "./home";
import { notFound } from "next/navigation";
import RedirectHome from "./components/RedirectHome";

export default async function Deliveries() {
  const nextCookies = cookies();
  const auth = JSON.parse(nextCookies.get("ss-auth")?.value || "{}");
  console.log("🚀 ~ file: page.tsx:7 ~ Deliveries ~ auth:", auth);
  const fetchDeliveries = async () => {
    try {
      const deliveries = await axios.get(
        "https://sandbox.sendstack.africa/api/v1/deliveries?page=0&limit=5",
        {
          headers: {
            app_id: auth?.appId,
            app_secret: auth?.appSecret,
          },
        }
      );
      return deliveries.data;
    } catch (e) {
     return null
    }
  };
  const deliveries: DeliveryResponse = await fetchDeliveries();
  console.log(
    "🚀 ~ file: page.tsx:25 ~ Deliveries ~ deliveries:",
    deliveries
  );
  return (
    <main className=" min-h-screen w-full pt-[2rem] rsm:pt-[2rem] pb-[6rem]  dp:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100  px-12 rsm:px-2">
      {deliveries?<Home deliveries={deliveries} />: <RedirectHome/>}
    </main>
  );
}
