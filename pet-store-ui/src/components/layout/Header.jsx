import { useSelector } from 'react-redux';

export default function Header() {
    // Select trực tiếp vào nhánh 'auth' trong Store
    const { isAuthenticated, adminName } = useSelector((state) => state.auth);

    return (
        <header>
            <h1>Pet Store Admin Panel</h1>
            <div>
                {isAuthenticated
                    ? <span style={{ color: 'green' }}>Xin chào, {adminName}</span>
                    : <span style={{ color: 'red' }}>Vui lòng đăng nhập</span>
                }
            </div>
        </header>
    );
}