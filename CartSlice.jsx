import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, image, quantity }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // ✅ REQUIRED: addItem()
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    // ✅ REQUIRED: removeItem()
    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;

      state.items = state.items.filter((item) => item.id !== id);
    },

    // ✅ REQUIRED: updateQuantity()
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (!item) return;

      const diff = amount - item.quantity;

      item.quantity = amount;

      state.totalQuantity += diff;
      state.totalPrice += diff * item.price;

      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
