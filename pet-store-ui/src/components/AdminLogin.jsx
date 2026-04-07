import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/authSlice';

export default function AdminLogin() {
    const dispatch = useDispatch(); // Móc nối Dispatcher

    const handleLogin = () => {
        // Giả lập sau khi gọi API thành công, backend trả về thông tin
        const mockResponse = { name: 'Admin Thịnh', token: 'jwt_token_123' };

        // Bắn lệnh vào Store
        dispatch(loginSuccess(mockResponse));
    };

    return (
        <div style={{ padding: '20px', border: '1px solid black' }}>
            <h2>Trang Đăng Nhập Quản Trị</h2>
            <button onClick={handleLogin}>Mô phỏng Đăng nhập thành công</button>
            <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </div>
    );
}