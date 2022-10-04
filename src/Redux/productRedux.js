import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = true;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    removeProductStart: (state) => {
      state.isFetching = true;
    },

    removeProductSuccess: (state, action) => {
      state.products.splice(state.products.findIndex((item)=>item._id===action.payload),1)
      state.isFetching = false;
    },
    removeProductFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  removeProductStart,
  removeProductSuccess,
  removeProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
