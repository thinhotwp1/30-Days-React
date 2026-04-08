import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {
    const { cartCount } = useCart();

    // Hàm style của NavLink được rút gọn
    const navClass = ({ isActive }) =>
        `font-semibold text-lg transition-colors duration-200 ${
            isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
        }`;

    return (
        // Thay vì style={{...}}, ta dùng className
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                🐶 Paw & Purr
            </div>

            <nav className="flex space-x-6">
                <NavLink to="/" className={navClass}>Trang chủ</NavLink>
                <NavLink to="/products" className={navClass}>Sản phẩm</NavLink>
                <NavLink to="/cart" className={navClass}>
                    Giỏ hàng
                    {cartCount > 0 && (
                        <span className="ml-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cartCount}
            </span>
                    )}
                </NavLink>
                <NavLink to="/admin" className={navClass}>Admin</NavLink>
            </nav>
        </header>
    );
}