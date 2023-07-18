import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productDescription: [],
  isLoading: false,
};

export const fetchProductDescription = createAsyncThunk("productDescription/fetchProductDescription", async (id) => {
  try {
    const response = await axios.get("http://127.0.0.1:3001/api/products/" + id);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const productDescriptionSlice = createSlice({
  name: "Products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDescription.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductDescription.fulfilled, (state, { payload }) => {
        const newDescription = []
        newDescription.push(payload)
        return {
          ...state,
          isLoading: false,
          productDescription: newDescription,
        };
      })
      .addCase(fetchProductDescription.rejected, (state) => ({
        ...state,
        isLoading: false,
        // isError: true,
      }));
  },
});

export default productDescriptionSlice.reducer;
