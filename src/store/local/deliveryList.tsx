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
      state.Deliveries = updatedDeliveries;
    },
    clearDeliveryList: (state)=>{
      state.Deliveries = []
    }
  },
});

export const { addToDeliveryList,clearDeliveryList } = DeliveryList.actions;
export default DeliveryList.reducer;
