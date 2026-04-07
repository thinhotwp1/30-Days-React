import { createSlice } from '@reduxjs/toolkit';
// 1. Trạng thái khởi tạo (Default values)
const initialState = {
    isAuthenticated: false,
    adminName: null,
    token: null
};
// 2. Tạo Slice (Tự động sinh ra Reducer và Action)
export const authSlice = createSlice({
    name: 'auth', // Tên định danh của Slice
    initialState,
    reducers: {
        // Tương đương với case 'LOGIN' trong useReducer
        loginSuccess: (state, action) => {
            // RTK dùng thư viện Immer.js dưới nền, cho phép bạn viết code MUTATE
            // (sửa trực tiếp state) giống Java mà không vi phạm nguyên tắc Immutability của React!
            state.isAuthenticated = true;
            state.adminName = action.payload.name;
            state.token = action.payload.token;
        },
        // Tương đương với case 'LOGOUT'
        logout: (state) => {
            state.isAuthenticated = false;
            state.adminName = null;
            state.token = null;
        }
    }
});
// 3. Export các Action để Component sử dụng (Dispatch)
export const { loginSuccess, logout } = authSlice.actions;
// 4. Export Reducer để gắn vào Store gốc
export default authSlice.reducer;