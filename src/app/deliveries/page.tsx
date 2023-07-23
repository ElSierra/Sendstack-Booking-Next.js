import axios from "axios";
import { cookies } from "next/headers";

import { DeliveryResponse } from "@/types";
import Home from "./home";

import RedirectHome from "./components/RedirectHome";

export default async function Deliveries() {
  const nextCookies = cookies();
  const auth = JSON.parse(nextCookies.get("ss-auth")?.value || "{}");

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

  return (
    <main className=" min-h-screen w-full pt-[2rem] rsm:pt-[2rem] pb-[6rem]  dp:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100  px-12 rsm:px-2">
      {deliveries?<Home deliveries={deliveries} />: <RedirectHome/>}
    </main>
  );
}
