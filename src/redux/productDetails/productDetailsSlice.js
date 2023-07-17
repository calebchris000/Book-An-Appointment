import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Products: [],
  isLoading: false,
};

export const fetchProductDetails = createAsyncThunk("Products/fetchProductDetails", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3001/api/products");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const productDetailsSlice = createSlice({
  name: "Products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
        console.log(payload);
        return {
          ...state,
          isLoading: false,
          Products: payload,
        };
      })
      .addCase(fetchProductDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        // isError: true,
      }));
  },
});

export default productDetailsSlice.reducer;
