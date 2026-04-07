// src/pages/CartPage.jsx
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const navigate = useNavigate();

    const handleGoToCheckout = () => {
        // Chuyển hướng người dùng sang trang checkout
        navigate('/checkout');
    };

    return (
        <div>
            <h2>Giỏ hàng của bạn</h2>
            {/* ... Render danh sách giỏ hàng ... */}
            <button onClick={handleGoToCheckout} style={{ padding: '10px', background: 'green', color: 'white' }}>
                Tiến hành Thanh toán
            </button>
        </div>
    );
}