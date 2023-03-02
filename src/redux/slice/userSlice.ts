import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState = {
  name: "",
  email: "",
  photo: "",
  isLogin: false,
};

const userSliece = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetail: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isLogin = true;
    },
    setSignOutState: (state) => {
      (state.email = ""),
        (state.name = ""),
        (state.isLogin = false),
        (state.photo = "");
    },
  },
});

export const { setUserLoginDetail, setSignOutState } = userSliece.actions;

// export const selectUsername = state => state.user.name;

export default userSliece.reducer;
