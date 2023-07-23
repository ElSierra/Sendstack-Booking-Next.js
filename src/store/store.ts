import { configureStore } from "@reduxjs/toolkit";
import formStep from "./local/formStep";
import locationList from "./local/locationList";
import deliveryDetails from "./local/deliveryDetails";
import modal from "./local/modal";
import modalTrack from "./local/modalTrack";
import modalCancel from "./local/modalCancel";
import user from "./local/userDetails";
import cancelList from './local/cancelledUpdateState'
import deliveryList from "./local/deliveryList";
import { getSendStack } from "./api/sendStackApi";

export const store = configureStore({
  reducer: {
    formStep,
    modal,
    modalTrack,
    modalCancel,
    cancelList,
    deliveryList,
    user,

    [getSendStack.reducerPath]: getSendStack.reducer,
    locationList,
    deliveryDetails,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(getSendStack.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
