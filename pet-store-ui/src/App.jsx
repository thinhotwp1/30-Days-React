// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Các trang (Pages)
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import AdminLogin from './components/AdminLogin';
import MyDropdown from "./components/MyDropdown.jsx"; // Trang Admin đã làm hôm trước

function App() {
    return (
        <>
            <Header />
            <main className="main-content" style={{ minHeight: '80vh', padding: '20px' }}>
                {/* Bảng phân luồng giao thông */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/admin" element={<AdminLogin />} />

                    {/* Route bắt lỗi 404 - Nếu URL không khớp bất kỳ path nào ở trên */}
                    <Route path="*" element={<h2>404 - Không tìm thấy trang (Page Not Found)</h2>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;