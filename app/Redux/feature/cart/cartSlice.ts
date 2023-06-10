"use client";
import ProductModel, { CartModel } from "@/app/lib/product_type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartModel = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(
      state: CartModel,
      action: PayloadAction<{ product: ProductModel; quantity: number }>
    ) {
      const itemInCart = state.items.find(
        (item) => item._id === action.payload.product._id
      );
      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item._id !== action.payload
      );
      state.items = removeItem;
    },
  },
});

export const { addItemToCart, removeItem } = counterSlice.actions;
export default counterSlice.reducer;
