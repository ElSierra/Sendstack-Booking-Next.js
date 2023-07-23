import {
  Balance,
  CancelDeliveryResponse,
  DeliveryData,
  DeliveryDataResponse,
  DeliveryPrice,
  DeliveryPriceResponse,
  DeliveryResponse,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const getSendStack = createApi({
  reducerPath: "userInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("ss-auth");

      if (token) {
        const parsedToken: { appId: string; appSecret: string } =
          JSON.parse(token);

        headers.set("app_id", parsedToken.appId);
        headers.set("app_secret", parsedToken.appSecret);
      }
    },
  }),
  tagTypes: ["balance", "delivery", "location", "deliveryFee", "deliveries"],

  endpoints: (builder) => ({
    getBalance: builder.query<Balance, null>({
      query: () => "/wallet/balance",
      providesTags: ["balance"],
    }),
    getDeliveryLocation: builder.query<any, null>({
      query: () => "/locations",
      providesTags: ["location"],
    }),
    getDeliveries: builder.query<
      DeliveryResponse,
      { limit: number; page: number }
    >({
      query: (payload) =>
        `/deliveries?limit=${payload.limit}&page=${payload.page}`,
      providesTags: ["deliveries"],
    }),
    getDeliveryPrice: builder.mutation<DeliveryPriceResponse, DeliveryPrice>({
      query: (payload) => ({
        url: "/deliveries/price",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["deliveryFee"],
    }),
    requestDelivery: builder.mutation<DeliveryDataResponse, DeliveryData>({
      query: (payload) => ({
        url: "/deliveries",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["balance"],
    }),
    cancelDelivery: builder.mutation<
      CancelDeliveryResponse,
      { trackingId?: string; deliveryId: string }
    >({
      query: (payload) => ({
        url: `/deliveries/${payload.deliveryId}/cancel`,
        method: "POST",
        body: {trackingId:payload?.trackingId},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["balance", "deliveries"],
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetDeliveryLocationQuery,
  useGetDeliveryPriceMutation,
  useRequestDeliveryMutation,
  useCancelDeliveryMutation,
  useGetDeliveriesQuery,
} = getSendStack;
