// src/pages/CheckoutPage.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
    const navigate = useNavigate();
    // Lấy data giỏ hàng và hàm dispatch để xóa giỏ
    const { cartCount, dispatch, ACTIONS } = useCart();

    const handleCheckout = (e) => {
        e.preventDefault(); // Ngăn form reload lại trang mặc định của trình duyệt

        // Giả lập gọi API thanh toán mất 1 giây...
        alert('🎉 Thanh toán thành công! Cảm ơn bạn đã mua hàng.');

        // 1. Xóa sạch giỏ hàng trong Context
        dispatch({ type: ACTIONS.CLEAR_CART });

        // 2. Điều hướng người dùng về Trang chủ.
        // LƯU Ý: replace: true giúp ghi đè lịch sử trình duyệt,
        // ngăn người dùng bấm nút Back (<-) quay lại trang thanh toán này.
        navigate('/', { replace: true });
    };

    // Nếu giỏ hàng trống mà user cố tình gõ URL /checkout, đá họ về trang Products
    if (cartCount === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Giỏ hàng của bạn đang trống!</h2>
                <button
                    onClick={() => navigate('/products')}
                    style={{ padding: '10px 20px', marginTop: '15px', cursor: 'pointer' }}
                >
                    Quay lại Cửa hàng
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            <h2>Thanh toán Đơn hàng</h2>
            <p>Bạn đang thanh toán cho <strong>{cartCount}</strong> sản phẩm.</p>

            <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <div>
                    <label>Họ và tên:</label><br />
                    <input type="text" required style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
                </div>
                <div>
                    <label>Địa chỉ giao hàng:</label><br />
                    <textarea required rows="3" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}></textarea>
                </div>
                <button
                    type="submit"
                    style={{ padding: '12px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Xác nhận Thanh toán
                </button>
            </form>
        </div>
    );
}