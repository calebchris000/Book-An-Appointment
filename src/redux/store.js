import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetails/productDetailsSlice";
import productDescriptionReducer from "./productDescription/productDescriptionSlice";
import signupReducer from "./signup/signupSlice"
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
    signup: signupReducer
  },
  middleware: [thunk],
});

export default store;
