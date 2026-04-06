// src/components/layout/Header.jsx
import { useCart } from '../../context/CartContext';

export default function Header() {
    const { cartCount } = useCart(); // Lấy số lượng giỏ hàng trực tiếp từ Context

    return (
        <header className="site-header">
            <div className="logo">
                <h2>🐶 Paw & Purr E-commerce</h2>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    {/* Header tự động render lại khi cartCount trong Context thay đổi */}
                    <li style={{fontWeight: 'bold', color: 'red'}}>Cart ({cartCount})</li>
                </ul>
            </nav>
        </header>
    );
}