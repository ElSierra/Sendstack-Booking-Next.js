import { Drops, PickUp, UserDetails, emptyUserDetails } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DeliveryDetails {
  pickup: PickUp | null;
  drops: Drops[];
}
const deliveryDetails = createSlice({
  name: "deliveryDetails",
  initialState: {
    pickup:
      typeof window !== "undefined" && localStorage.getItem("_ssUD")
        ? JSON.parse(localStorage.getItem("_ssUD") || "")
        : null,
    drops: [],
  } as DeliveryDetails,
  reducers: {
    addUserDetails: (state, action: PayloadAction<PickUp>) => {
      state.pickup = action.payload;
      console.log(
        "🚀 ~ file: deliveryDetails.tsx:15 ~ payload:",
        action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.removeItem("_ssUD");
        localStorage.setItem("_ssUD", JSON.stringify(action.payload));
      }
    },
    removeUserDetails: (state) => {
      state.pickup = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("_ssUD");
      }
    },
  },
});

export default deliveryDetails.reducer;
export const { addUserDetails, removeUserDetails } = deliveryDetails.actions;
