export default function Header() {
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/cart">Cart (0)</a></li>
                </ul>
            </nav>
        </header>
    );
}