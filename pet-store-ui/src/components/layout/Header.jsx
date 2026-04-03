export default function Header({cartCount}) {
    // Logic JS có thể viết ở đây (trước câu lệnh return)
    const storeName = "Paw & Purr E-commerce";

    return (
        <header className="site-header">
            <div className="logo">
                {/* Trong JSX, dùng dấu ngoặc nhọn {} để nhúng biến JavaScript */}
                <h2>🐶 {storeName}</h2>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Cart ({cartCount})</li> {/* Hiển thị số lượng từ App truyền xuống */}
                </ul>
            </nav>
        </header>
    );
}