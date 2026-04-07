// src/components/layout/Header.jsx
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {
    const { cartCount } = useCart();

    // Hàm tự động thêm style nếu Link đang được active
    const navStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#007bff' : 'black',
            textDecoration: 'none',
            marginRight: '15px'
        };
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#f8f9fa' }}>
            <div className="logo">🐶 Paw & Purr</div>
            <nav>
                {/* Sử dụng NavLink thay cho thẻ <a> */}
                <NavLink to="/" style={navStyle}>Home</NavLink>
                <NavLink to="/products" style={navStyle}>Products</NavLink>
                <NavLink to="/cart" style={navStyle}>
                    Cart <span style={{ color: 'red' }}>({cartCount})</span>
                </NavLink>
                <NavLink to="/admin" style={navStyle}>Admin</NavLink>
            </nav>
        </header>
    );
}