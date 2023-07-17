import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetails/productDetailsSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
  },
  middleware: [thunk],
});

export default store;
