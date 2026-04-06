import { createContext, useState, useContext } from 'react';

// 1. Khởi tạo Context (Giống như định nghĩa một Class Singleton)
const CartContext = createContext();

// 2. Tạo Provider Component (Lớp triển khai Service)
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log("Add product: " + product);
        // Luôn giữ tính bất biến: Tạo mảng mới từ mảng cũ
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const cartCount = cart.length;

    // Trả về Provider kèm theo giá trị muốn chia sẻ
    return (
        <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// 3. Custom Hook để các component con sử dụng dễ dàng hơn
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart phải được dùng trong CartProvider');
    }
    return context;
};