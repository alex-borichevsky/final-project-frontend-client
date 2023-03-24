import {createSlice} from "@reduxjs/toolkit";
import { ProductState } from "../types/product-state.type";
import { getProducts, getProductsByCategoryId } from "./products.actions";

const initialState:ProductState = {
  products: [],
  product: null,
  pending: {
    products: false,
    product: false
  },
  errors: {
    products: null,
    product: null
  }
}

const productsSlice = createSlice({
  name: 'prodcuts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
          state.pending.products = true;
          state.errors.products = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
          state.pending.products = false;
          state.products = payload;
      })
      .addCase(getProducts.rejected, (state, action: any & { payload: any }) => {
          state.pending.products = false;
          state.errors.products = action.payload.message;
      })
      .addCase(getProductsByCategoryId.pending, (state) => {
        state.pending.products = true;
        state.errors.products = null;
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, { payload }) => {
          state.pending.products = false;
          state.products = payload;
      })
      .addCase(getProductsByCategoryId.rejected, (state, action: any & { payload: any }) => {
          state.pending.products = false;
          state.errors.products = action.payload.message;
      })
  },
});

export default productsSlice.reducer;