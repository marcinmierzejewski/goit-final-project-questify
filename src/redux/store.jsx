import { configureStore } from "@reduxjs/toolkit";
import { questifyApi } from "./slices/questifyAPI";

export const store = configureStore({
  reducer: {
    [questifyApi.reducerPath]: questifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questifyApi.middleware),
  devTools: false,
});
