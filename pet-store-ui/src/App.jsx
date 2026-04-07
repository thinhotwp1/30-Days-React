// src/App.jsx
import Header from './components/layout/Header';
import AdminLogin from './components/AdminLogin';
// Nếu bạn để AdminLogin ở thư mục khác thì nhớ sửa lại đường dẫn import cho đúng nhé

function App() {
    return (
        <div>
            {/* Gọi Header để nó đọc dữ liệu từ Redux Store */}
            <Header />

            <main style={{ padding: '20px' }}>
                {/* Gọi form đăng nhập để nó bắn Action (Ghi dữ liệu) vào Store */}
                <AdminLogin />
            </main>
        </div>
    );
}

export default App;