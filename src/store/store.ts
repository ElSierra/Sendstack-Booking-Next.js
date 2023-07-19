import { configureStore } from "@reduxjs/toolkit";
import formStep from "./local/formStep";
import { getSendStack } from "./api/sendStackApi";

export const store = configureStore({
  reducer: { formStep, [getSendStack.reducerPath]: getSendStack.reducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getSendStack.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
