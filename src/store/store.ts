import { configureStore } from "@reduxjs/toolkit";
import formStep from "./local/formStep";
import locationList from "./local/locationList";
import deliveryDetails from "./local/deliveryDetails";
import { getSendStack } from "./api/sendStackApi";

export const store = configureStore({
  reducer: {
    formStep,
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
