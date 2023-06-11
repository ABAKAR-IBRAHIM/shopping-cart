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
        //setting the total price for specific product
        itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;
      } else {
        state.items.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
          totalPrice: action.payload.product.price,
        });
      }

      var sum = 0;
      var total = 0;

      for (let i = 0; i < state.items.length; i++) {
        sum += state.items[i].quantity;
        total += state.items[i].totalPrice;
      }

      //setting the totalQuantity and totalAmount
      state.totalQuantity = sum;
      state.totalAmount = total;
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item._id !== action.payload
      );
      state.items = removeItem;
    },

    incrementQuantity: (
      state,
      action: PayloadAction<{ product: ProductModel }>
    ) => {
      const itemInCart = state.items.find(
        (item) => item._id === action.payload.product._id
      );
      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + 1;
        itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;
        var sum = 0;
        var total = 0;
        for (let i = 0; i < state.items.length; i++) {
          sum += state.items[i].quantity;
          total += state.items[i].totalPrice;
        }
        state.totalQuantity = sum;
        state.totalAmount = total;
      }
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{ product: ProductModel }>
    ) => {
      const itemInCart = state.items.find(
        (item) => item._id === action.payload.product._id
      );
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity = itemInCart.quantity - 1;
        itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;

        state.totalQuantity--;

        var total = 0;
        for (let i = 0; i < state.items.length; i++) {
          total += state.items[i].totalPrice;
        }

        state.totalAmount = total;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} = counterSlice.actions;
export default counterSlice.reducer;
