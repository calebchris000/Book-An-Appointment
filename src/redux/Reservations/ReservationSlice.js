import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  reservations: [],
  success: null,
  failure: null,
  errorMessage: null,
};

export const getReservations = createAsyncThunk("Reservations/getReservations", async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const request = await axios.get("http://127.0.0.1:3001/api/reservations", {
        headers: {
          Authorization: authToken,
        },
      });
      console.log(request.data);
      
      return request.data;
    }
  } catch (error) {
    return error.message;
  }
});

const ReservationSlice = createSlice({
  name: "Reservations",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReservations.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.reservations = payload;
      })
      .addCase(getReservations.rejected, (state, { payload }) => {
        const { loading, failure, errorMessage } = state;
        loading = false;
        failure = true;
        errorMessage = payload;
      });
  },
});

export default ReservationSlice.reducer;
