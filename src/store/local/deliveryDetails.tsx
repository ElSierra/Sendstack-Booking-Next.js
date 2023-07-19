import { Drops, UserDetails, emptyUserDetails } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DeliveryDetails {
  pickup: UserDetails;
  drops: Drops[];
}

const deliveryDetails = createSlice({
  name: "deliveryDetails",
  initialState: { pickup: emptyUserDetails, drops: [] } as DeliveryDetails,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserDetails>) => {
      state.pickup = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("_ssUD", JSON.stringify(action.payload));
      }
    },
    removeUserDetails: (state) => {
      state.pickup = emptyUserDetails;
    },
  },
});

export default deliveryDetails.reducer;
