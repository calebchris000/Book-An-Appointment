import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./productDetails/productDetailsSlice";
import productDescriptionReducer from "./productDescription/productDescriptionSlice";
import thunk from "redux-thunk";
import deleteCarReducer from './deleteCarSlice';

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productDescription: productDescriptionReducer,
  },
  middleware: [thunk],

  reducer: {
    deleteCar: deleteCarReducer,
  },
});

export default store;
