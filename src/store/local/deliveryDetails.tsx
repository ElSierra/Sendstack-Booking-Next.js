import { Drops, PickUp, UserDetails, emptyUserDetails } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface DeliveryDetails {
  pickup: PickUp | null;
  drops: Drops[];
}
const deliveryDetails = createSlice({
  name: "deliveryDetails",
  initialState: {
    pickup:
      typeof window !== "undefined" && Cookies.get("_ssUD")
        ? JSON.parse(Cookies.get("_ssUD") || "")
        : null,
    drops: [],
  } as DeliveryDetails,
  reducers: {
    addUserDetails: (state, action: PayloadAction<PickUp>) => {
      let currentTime = new Date();
      let newTime = new Date(currentTime.getTime() + 30 * 60000);
      state.pickup = action.payload;
      console.log(
        "🚀 ~ file: deliveryDetails.tsx:15 ~ payload:",
        action.payload
      );
      if (typeof window !== "undefined") {
        Cookies.remove("_ssUD");
        Cookies.set("_ssUD", JSON.stringify(action.payload), {
          expires: newTime,
        });
      }
      console.log("🐶 State", state);
    },
    addLocationDetails: (state, action: PayloadAction<Drops[]>) => {
      let currentTime = new Date();
      let newTime = new Date(currentTime.getTime() + 30 * 60000);
      state.drops = action.payload;
      if (typeof window !== "undefined") {
        Cookies.remove("_ssUD");
        Cookies.set("_ssUD", JSON.stringify(state), { expires: newTime });
      }
    },
    removeUserDetails: (state) => {
      state.pickup = null;
      if (typeof window !== "undefined") {
        Cookies.remove("_ssUD");
      }
    },
  },
});

export default deliveryDetails.reducer;
export const { addUserDetails, removeUserDetails, addLocationDetails } =
  deliveryDetails.actions;
