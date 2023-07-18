import { Balance } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const getUserInfo = createApi({
  reducerPath: "userInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("ss-auth");

      if (token) {
        const parsedToken:{appId:string,appSecret:string} = JSON.parse(token);
        console.log("🚀 ~ file: getUserInfo.ts:12 ~ parsedToken:", parsedToken)
        headers.set("app_id", parsedToken.appId)
        headers.set("app_secret", parsedToken.appSecret)
      }
    },
  }),
  tagTypes: ["balance", "delivery"],

  endpoints: (builder) => ({
    getBalance: builder.query<Balance,null>({
      query: () => "/wallet/balance",
      providesTags: ["balance"],
    }),
  }),
});

export const { useGetBalanceQuery } = getUserInfo;