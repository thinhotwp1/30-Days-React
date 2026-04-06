// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

// 1. Định nghĩa các Hành động (Giống Enum trong Java)
const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART'
};

// 2. Viết hàm Reducer (Bộ xử lý trung tâm)
// Nó nhận vào trạng thái cũ (state) và chỉ thị (action), trả ra trạng thái mới
const cartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            // Kiểm tra xem pet này đã có trong giỏ chưa
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Nếu có rồi thì không thêm nữa (hoặc tăng số lượng lên)
                return state;
            }
            // Trả về mảng mới gồm các món cũ + món mới
            return [...state, action.payload];

        case ACTIONS.REMOVE_ITEM:
            // Lọc bỏ món hàng có id trùng với id gửi lên
            return state.filter(item => item.id !== action.payload);

        case ACTIONS.CLEAR_CART:
            return []; // Trả về giỏ hàng trống

        default:
            return state; // Mặc định không làm gì cả
    }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 3. Khai báo useReducer thay vì useState
    // Truyền vào hàm xử lý (cartReducer) và giá trị khởi tạo ban đầu (mảng rỗng [])
    const [cart, dispatch] = useReducer(cartReducer, []);

    // 4. Các Component bên ngoài không còn được gọi trực tiếp hàm xử lý nữa.
    // Chúng chỉ được phép dùng hàm `dispatch` để "bắn" Action vào Reducer.
    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, cartCount, dispatch, ACTIONS }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);