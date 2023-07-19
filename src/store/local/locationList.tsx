import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Location } from "@/types";
import { getSendStack } from "../api/sendStackApi";

type deliveryState = {
  data: Location[];
  error: any;
  loading: boolean;
};
const initialState = {
  data: [],
  error: null,
  loading: false,
} as deliveryState;

export const locationList = createSlice({
  name: "userData",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];

      state.error = null;
      state.loading = false;
    },
    updateState: (state, action: PayloadAction<Location[]>) => {
      console.log("payload", action.payload);
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      getSendStack.endpoints.getDeliveryLocation.matchFulfilled,
      (state, { payload }) => {
        console.log("🚀 ~ file: locationList.tsx:36 ~ payload:", payload.data)
        state.data = payload.data[0].locals;
        state.loading = false;
      }
    );

    builder.addMatcher(
      getSendStack.endpoints.getDeliveryLocation.matchPending,
      (state, { payload }) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      getSendStack.endpoints.getDeliveryLocation.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      }
    );
  },
});

export const { updateState, reset } = locationList.actions;
export default locationList.reducer;
