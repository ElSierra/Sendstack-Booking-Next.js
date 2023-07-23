import { createSlice } from "@reduxjs/toolkit";
import { getSendStack } from "../api/sendStackApi";

const user = createSlice({
  name: "user",
  initialState: {
    bal: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      getSendStack.endpoints.getBalance.matchFulfilled,
      (state, { payload }) => {
       
        state.bal = payload.data.balance;
      }
    );
  },
});

export default user.reducer;
