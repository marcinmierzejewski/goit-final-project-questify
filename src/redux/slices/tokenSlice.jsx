import { createSlice } from "@reduxjs/toolkit";

const initialState =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzkzNmY1Y2E4YWYyYTBiYWQ5YjkxMDkiLCJzaWQiOiI2Mzk0MDBlYmE4YWYyYTBiYWQ5YjkxMWMiLCJpYXQiOjE2NzA2NDM5NDcsImV4cCI6MTY3MDY0NzU0N30.-Z4SUmFqSqjWwbtxx0Cxp3yOSiwc-e6dHXhoj_mhvNI";

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
