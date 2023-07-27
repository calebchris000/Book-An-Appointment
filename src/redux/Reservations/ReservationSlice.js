import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://cars-app-gvkh.onrender.com/";
const authToken = localStorage.getItem("authToken");
const initialState = {
  loading: false,
  reservations: [],
  success: null,
  failure: null,
  errorMessage: null,
  postReservationSuccess: null,
  postReservationFailure: null,
  message: null,
};

export const getReservations = createAsyncThunk("Reservations/getReservations", async () => {
  try {
    if (authToken) {
      const request = await axios.get(`${url}api/reservations`, {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });

      return request.data;
    }
  } catch (error) {
    return error.message;
  }
});

export const postReservation = createAsyncThunk("Reservations/postReservations", async (data) => {
  try {
    if (authToken) {
      const request = await fetch(`${url}api/reservations`, data.method);
      const response = await request.json();
      return response;
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
      })
      .addCase(postReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(postReservation.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.postReservationSuccess = true;
        state.message = payload;
      })
      .addCase(postReservation.rejected, (state, { error }) => {
        state.loading = false;
        state.postReservationFailure = true;
        state.errorMessage = error;
      })
      .addCase('Reservations/ResetState', (state) => {
        state.success = null;
        state.failure = null;
        state.postReservationSuccess = null;
        state.postReservationFailure = null;
      })
  },
});

export default ReservationSlice.reducer;
