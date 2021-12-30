import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/app/store";
import { IProduct } from "products/types";
import { getProducts } from "./api";

export interface State {
  all: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: State = {
  all: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await getProducts();
});

export const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload as IProduct[];
      });
  },
});

// export const {} = slice.actions;

export const selectProducts = (state: RootState) => state.products;

export default slice.reducer;
