import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { petFoodApi } from '../services/petFoodApi'; // Import API vừa tạo

export const store = configureStore({
    reducer: {
        auth: authReducer,

        // Đăng ký API Slice vào Store
        [petFoodApi.reducerPath]: petFoodApi.reducer,
    },

    // BẮT BUỘC: Thêm Middleware của RTK Query để kích hoạt các tính năng Caching, Polling, Invalidation
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petFoodApi.middleware),
});