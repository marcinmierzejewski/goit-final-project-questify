import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  cards: [],
  challengeFIlter: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => payload,
    deleteUser: (state, { payload }) => initialState,
    challengeToggle: (state, { payload }) => { state.challengeFIlter = !state.challengeFIlter }
  },
});

export const { addUser, deleteUser, challengeToggle } = userSlice.actions;

export default userSlice.reducer;