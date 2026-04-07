// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>🐶 Paw & Purr 🐱</h1>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                Hệ thống siêu thị Thú cưng được xây dựng bằng kiến trúc React Enterprise
            </p>

            <div style={{ marginTop: '30px' }}>
                {/* Dùng thẻ Link của React Router để chuyển trang SPA */}
                <Link
                    to="/products"
                    style={{
                        padding: '12px 24px',
                        background: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Khám phá Cửa hàng ngay
                </Link>
            </div>
        </div>
    );
}