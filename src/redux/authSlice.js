import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuth: (state) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        return {
          ...state,
          isAuth: true,
        };
      } else {
        return {
          ...state,
          isAuth: false,
        };
      }
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
