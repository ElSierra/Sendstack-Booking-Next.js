import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getCurrentStep = Cookies.get("ss-step");
let currentTime = new Date();
let newTime = new Date(currentTime.getTime() + 30 * 60000);
const formStepSlice = createSlice({
  name: "formStep",
  initialState: { idx: getCurrentStep || "0" },
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      state.idx = action.payload;
      Cookies.set("ss-step", action.payload, { expires: newTime });
    },
  },
});

export default formStepSlice.reducer;
export const { setStep } = formStepSlice.actions;
