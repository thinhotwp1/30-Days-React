// src/context/CartContext.jsx
import {createContext, useContext, useReducer} from 'react';

// Định nghĩa các Hành động
const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART'
};

// Hàm xử lý logic (Reducer)
const cartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) return state; // Nếu có rồi thì không thêm trùng
            return [...state, action.payload];
        }
        case ACTIONS.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);
        case ACTIONS.CLEAR_CART:
            return []; // Xóa trắng giỏ hàng
        default:
            return state;
    }
};

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{cart, cartCount, dispatch, ACTIONS}}>
            {children}
        </CartContext.Provider>
    );
};

// Export Custom Hook để các Component khác dùng
export const useCart = () => useContext(CartContext);