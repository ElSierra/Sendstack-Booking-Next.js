import { DeliveryData, DeliveryResponseResult } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getSendStack } from "../api/sendStackApi";

type DeliveryListState = {
  Deliveries: DeliveryResponseResult[];
};
const DeliveryList = createSlice({
  name: "DeliveryList",
  initialState: {
    Deliveries: [],
  } as DeliveryListState,

  reducers: {
    addToDeliveryList: (
      state,
      action: PayloadAction<DeliveryResponseResult[]>
    ) => {
      let updatedDeliveries = [...state.Deliveries, ...action.payload];
      console.log("🚀 ~ file: deliveryList.tsx:20 ~ updatedDeliveries:", updatedDeliveries)
      state.Deliveries = updatedDeliveries;
    },
  },
});

export const { addToDeliveryList, } = DeliveryList.actions;
export default DeliveryList.reducer;
