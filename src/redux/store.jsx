import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "./slices/questifyAPI";
import tokenSlice from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
    token: tokenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questifyApi.middleware),
  devTools: false,
});
