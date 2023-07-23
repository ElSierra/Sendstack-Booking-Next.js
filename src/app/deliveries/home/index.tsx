"use client";
import { DeliveryResponse } from "@/types";
import DeliveryCard from "../components/DeliveryCard";
import { useEffect, useLayoutEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetDeliveriesQuery } from "@/store/api/sendStackApi";
import { Loader2 } from "lucide-react";
import "./scroll.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToDeliveryList } from "@/store/local/deliveryList";

export default function Home({ deliveries }: { deliveries: DeliveryResponse }) {
  console.log(
    "🚀 ~ file: index.tsx:13 ~ Home ~ deliveries:",
    deliveries.data.results.length
  );


  const dispatch = useAppDispatch();
  const deliveriesFromState = useAppSelector(
    (state) => state.deliveryList.Deliveries
  );
  console.log(
    "🚀 ~ file: index.tsx:21 ~ Home ~ deliveriesFromState:",
    deliveriesFromState
  );

  const [skip, setSkip] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const deliveriesFromServer = useGetDeliveriesQuery({
    limit: 10,
    page: deliveriesFromState?.length,
  },);
  console.log("🚀 ~ file: index.tsx:34 ~ Home ~ deliveriesFromServer:", deliveriesFromServer?.data?.data?.results?.length)

  const getMoreData = () => {
    if (deliveriesFromServer.data) {

      
      dispatch(
        addToDeliveryList(deliveriesFromServer.data?.data?.results)
      );
    }
  };
  const Icons = {
    spinner: Loader2,
  };
  useLayoutEffect(() => {
    if (deliveries.data.results.length == 10) {
      console.log('called')
      dispatch(addToDeliveryList(deliveries?.data?.results));
    }
  }, [deliveries?.data?.results, dispatch]);
  useEffect(() => {
    if (deliveriesFromServer?.data?.data?.results.length === 0) {
      setHasMore(false);
    }
  }, [deliveriesFromServer?.data?.data?.results, dispatch, deliveries]);

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
      {deliveriesFromState.length > 0 && (
        <InfiniteScroll
          className="infinite-scroll"
          style={{ marginTop: "60px", scrollbarWidth: "none" }}
          dataLength={deliveriesFromState.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<Icons.spinner className="animate-spin" />}
        >
          {deliveriesFromState.map((deliveryData, idx) => (
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
