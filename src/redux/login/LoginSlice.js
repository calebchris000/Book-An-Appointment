import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const url = "http://127.0.0.1:3001/";

const initialState = {
  loggedIn: false,
  loading: null,
  success: null,
  failure: null,
  message: null,
};

export const loginUser = createAsyncThunk("login/User", async (authData) => {
  try {
    const response = await fetch("http://127.0.0.1:3001/" + authData.endPoints, authData.method);

    const data = await response.json();
    if (data.status.code === 200) {
      const token = response.headers.get("Authorization");
      const userName = data.data.name;
      localStorage.setItem("authToken", token);
      localStorage.setItem("name", userName);
    } else {
      localStorage.removeItem("authToken");
      localStorage.removeItem("name");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});



const LoginSlice = createSlice({
  name: "Login",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase("Login/setLoginStatus", (state) => {
        const authData = localStorage.getItem("authToken");

        if (authData) {
          if (!state.loggedIn) {
            state.loggedIn = true;
          }
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.loggedIn = true;
        state.message = payload;
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.loading = false;
        state.failure = true;
        state.message = error;
      })
  },
});

export default LoginSlice.reducer;
