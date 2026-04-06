// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
    // Lấy hàm dispatch và danh sách ACTIONS từ kho
    const { dispatch, ACTIONS } = useCart();

    const handleAdd = () => {
        // Gửi một "Chỉ thị" vào hệ thống
        dispatch({
            type: ACTIONS.ADD_ITEM,
            payload: product
        });
    };

    return (
        <div className="product-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px', width: '250px' }}>
            {/* Đã khôi phục lại các thẻ hiển thị thông tin */}
            <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </p>

            <button
                onClick={handleAdd}
                style={{ padding: '8px 16px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', width: '100%' }}
            >
                Add to Cart
            </button>
        </div>
    );
}