import { configureStore } from "@reduxjs/toolkit";
import formStep from "./local/formStep";
import { getUserInfo } from "./api/getUserInfo";

export const store = configureStore({
  reducer: { formStep, [getUserInfo.reducerPath]: getUserInfo.reducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getUserInfo.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
