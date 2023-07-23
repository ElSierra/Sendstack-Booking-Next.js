"use client";
import { DeliveryResponse, DeliveryResponseResult } from "@/types";
import DeliveryCard from "../components/DeliveryCard";
import { useEffect,  useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetDeliveriesQuery } from "@/store/api/sendStackApi";
import { Loader2 } from "lucide-react";
import "./scroll.css";


export default function Home({ deliveries }: { deliveries: DeliveryResponse }) {


  const [deliveriesList, setDeliveriesList] = useState<DeliveryResponseResult[]>(
    []
  );
 
  const [hasMore, setHasMore] = useState(true);
  const deliveriesFromServer = useGetDeliveriesQuery({
    limit: deliveriesList.length,
    page: 10,
  });

  const getMoreData = () => {
    if (deliveriesFromServer.data) {
      
      setDeliveriesList((prev) => [
        ...prev,
        ...(deliveriesFromServer.data?.data?.results || []),
      ]);
    }
  };
  const Icons = {
    spinner: Loader2,
  };
  useEffect(() => {
    if (deliveries.data.results.length >0) {
      setDeliveriesList((prev) => [...prev, ...deliveries?.data?.results]);
    }
  }, [deliveries?.data?.results]);
  useEffect(() => {
    if (deliveriesFromServer.data?.data.results.length === 0) {
      setHasMore(false);
    }
  }, [
    deliveriesFromServer.data?.data.results,
  ]);

  return (
    <div className="overflow-auto">
      {deliveriesList.length > 0 && (
        <InfiniteScroll
          className="infinite-scroll"
          style={{ marginTop: "60px", scrollbarWidth: "none" }}
          dataLength={deliveriesList.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<Icons.spinner className="animate-spin" />}
        >
          {deliveriesList.map((deliveryData, idx) => (
            <DeliveryCard
              DeliveryData={deliveryData}
              key={deliveryData.id}
              id={idx}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
}
