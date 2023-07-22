import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
};

const modalTrackSlice = createSlice({
  name: "modalTrack",
  initialState: { isOpen: false,} as ModalState,
  reducers: {
    openModalTrack: (state) => {
      state.isOpen = true;

    },
    closeModalTrack: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalTrackSlice.reducer;
export const { openModalTrack, closeModalTrack } = modalTrackSlice.actions;
