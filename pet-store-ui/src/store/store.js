import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// import cartReducer from './cartSlice'; // Giả sử sau này có thêm cartSlice

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // cart: cartReducer,
    },
});