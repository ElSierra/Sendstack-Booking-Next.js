import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
  text: string | null;
};

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, text: null } as ModalState,
  reducers: {
    openModal: (state, action: PayloadAction<{ text: string }>) => {
      state.isOpen = true;
      state.text = action.payload.text;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
