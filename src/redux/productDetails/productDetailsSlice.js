import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Products: [],
  isLoading: false,
  messages: "",
};

export const fetchProductDetails = createAsyncThunk("Products/fetchProductDetails", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3001/api/products", {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteProduct = createAsyncThunk("Products/deleteProduct", async (id) => {
  try {
    const response = await fetch("http://127.0.0.1:3001/api/products/" + id, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
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
      }))
      .addCase(deleteProduct.fulfilled, (state, action) => ({
        ...state,
        messages: action.payload,
      }));
  },
});

export default productDetailsSlice.reducer;
