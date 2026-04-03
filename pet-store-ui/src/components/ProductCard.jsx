// src/components/ProductCard.jsx

export default function ProductCard({name, price, imageUrl, inStock, onAddToCart}) {
    return (
        <div className="product-card" style={{
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '8px',
            margin: '10px',
            width: '250px',
            position: 'relative'
        }}>

            {/* CONDITIONAL RENDERING (Cách 2): Toán tử && */}
            {/* Chỉ hiển thị nhãn "Hết hàng" nếu inStock = false */}
            {!inStock && (
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'red',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                }}>
                    Hết hàng
                </div>
            )}

            <img
                src={imageUrl}
                alt={name}
                // Nếu hết hàng thì làm mờ ảnh (opacity 0.5)
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    opacity: inStock ? 1 : 0.5
                }}
            />
            <h3>{name}</h3>
            <p style={{color: 'green', fontWeight: 'bold'}}>
                {new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price)}
            </p>

            {/* CONDITIONAL RENDERING (Cách 1): Toán tử 3 ngôi */}
            {inStock ? (
                // Nếu còn hàng: Hiển thị nút Add to Cart bình thường
                <button onClick={onAddToCart} style={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}>
                    Add to Cart
                </button>
            ) : (
                // Nếu hết hàng: Hiển thị nút Tạm hết màu xám, bị disable
                <button disabled style={{
                    padding: '8px 16px',
                    cursor: 'not-allowed',
                    background: '#ccc',
                    color: '#666',
                    border: 'none',
                    borderRadius: '4px'
                }}>
                    Tạm hết
                </button>
            )}
        </div>
    );
}