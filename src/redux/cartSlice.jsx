import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "thumbnail": "https://www.igyaan.in/wp-content/uploads/2018/08/Iphone-9-leak-.jpg",
        "quantity": 1,
        "totalPrice": 549,
      },
    ],
    totalQuantity: 1,
    totalAmount: 549,
  };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.products.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        state.products.push({ ...item, quantity: 1, totalPrice: item.price });
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find(product => product.id === id);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter(product => product.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity -= 1;
      state.totalAmount -= existingItem.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
