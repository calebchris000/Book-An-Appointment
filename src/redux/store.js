import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetails/productDetailsSlice";
import productDescriptionReducer from "./productDescription/productDescriptionSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
  },
  middleware: [thunk],
});

export default store;
