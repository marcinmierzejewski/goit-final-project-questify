import { createSlice } from "@reduxjs/toolkit";

const initialState =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNmY1Y2E4YWYyYTBiYWQ5YjkxMDkiLCJzaWQiOiI2MzkzZjJhN2E4YWYyYTBiYWQ5YjkxMWEiLCJpYXQiOjE2NzA2NDAyOTYsImV4cCI6MTY3MDY0Mzg5Nn0.tEfyVsks7TmqYM42Nj49W0wLo_8-KADC-pJCLQjp9Mc";

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, { payload }) => payload,
    deleteToken: (state, { payload }) => "",
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;
