"use client";
import { DeliveryResponse } from "@/types";
import DeliveryCard from "../components/DeliveryCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetDeliveriesQuery } from "@/store/api/sendStackApi";
import { Loader2 } from "lucide-react";
import "./scroll.css";

export default function Home({ deliveries }: { deliveries: DeliveryResponse }) {
  const [deliveryData, setDeliveryData] = useState(
    () => deliveries?.data?.results
  );
  const [skip, setSkip] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const deliveriesFromServer = useGetDeliveriesQuery({
    limit: 10,
    page: deliveryData?.length,
  });
  console.log(
    "🚀 ~ file: index.tsx:18 ~ Home ~ deliveriesFromServer:",
    deliveriesFromServer.data?.data?.results
  );
  const getMoreData = () => {
    if (deliveriesFromServer.data) {
      setDeliveryData((restDeliveries) => [
        ...restDeliveries,
        ...(deliveriesFromServer?.data?.data?.results || []),
      ]);
    }
  };
  const Icons = {
    spinner: Loader2,
  };

  useEffect(() => {
    if (deliveriesFromServer?.data?.data?.results.length === 0) {
      setHasMore(false);
    }
  }, [deliveriesFromServer?.data?.data?.results]);

  return (
    <div className="overflow-auto">
      {/*         
      {deliveries?.data?.results?.map((deliveryData, idx) => (
        <DeliveryCard
          DeliveryData={deliveryData}
          key={deliveryData.id}
          id={idx}
        />
      ))} */}
     {deliveryData.length>0 && <InfiniteScroll
        className="infinite-scroll"
        style={{ marginTop: "60px", scrollbarWidth: "none" }}
        dataLength={deliveryData.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<Icons.spinner className="animate-spin" />}
      >
        {deliveryData.map((deliveryData, idx) => (
          <DeliveryCard
            DeliveryData={deliveryData}
            key={deliveryData.id}
            id={idx}
          />
        ))}
      </InfiniteScroll>}
    </div>
  );
}
