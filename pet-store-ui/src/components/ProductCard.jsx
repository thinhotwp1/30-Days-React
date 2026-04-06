// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

// Chú ý: Ở Bước 1 mình đã truyền nguyên object `product` xuống, nên ở đây ta hứng `product`
export default function ProductCard({ product }) {
    const { addToCart } = useCart(); // Lấy hàm addToCart từ Context

    return (
        <div className="product-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px', width: '250px' }}>
            <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </p>

            {/* Gọi hàm từ Context, không cần quan tâm component cha nữa */}
            <button
                onClick={() => addToCart(product)}
                style={{ padding: '8px 16px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Add to Cart
            </button>
        </div>
    );
}