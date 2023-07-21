import {
  Balance,
  DeliveryData,
  DeliveryDataResponse,
  DeliveryPrice,
  DeliveryPriceResponse,
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
        console.log("🚀 ~ file: getUserInfo.ts:12 ~ parsedToken:", parsedToken);
        headers.set("app_id", parsedToken.appId);
        headers.set("app_secret", parsedToken.appSecret);
      }
    },
  }),
  tagTypes: ["balance", "delivery", "location", "deliveryFee"],

  endpoints: (builder) => ({
    getBalance: builder.query<Balance, null>({
      query: () => "/wallet/balance",
      providesTags: ["balance"],
    }),
    getDeliveryLocation: builder.query<any, null>({
      query: () => "/locations",
      providesTags: ["location"],
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
  }),
});

export const {
  useGetBalanceQuery,
  useGetDeliveryLocationQuery,
  useGetDeliveryPriceMutation,
  useRequestDeliveryMutation,
} = getSendStack;
