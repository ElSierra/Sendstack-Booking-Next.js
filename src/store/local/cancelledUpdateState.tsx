import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CancelledState = {
  id: string[];
};
const CancelledList = createSlice({
  name: "DeliveryList",
  initialState: {
    id: [],
  } as CancelledState,

  reducers: {
    addCancelled: (state, action: PayloadAction<string>) => {
      state.id.push(action.payload);
    },
  },
});

export const { addCancelled } = CancelledList.actions;
export default CancelledList.reducer;
