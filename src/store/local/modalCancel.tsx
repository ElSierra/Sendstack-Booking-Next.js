import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
  id: string | null;
};

const modalCancelSlice = createSlice({
  name: "modalCancel",
  initialState: { isOpen: false, id: null } as ModalState,
  reducers: {
    openModalCancel: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModalCancel: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalCancelSlice.reducer;
export const { openModalCancel, closeModalCancel } = modalCancelSlice.actions;
