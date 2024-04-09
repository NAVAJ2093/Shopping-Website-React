import allProductsData from "../Components/Assets/all_product";

import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    all_product: allProductsData,
  },
  reducers: {},
});

export default shopSlice;
