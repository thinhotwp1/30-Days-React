// src/App.jsx
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
    return (
        <> {/* Sử dụng Fragment để bọc toàn bộ App */}
            <Header />

            <main className="main-content">
                <h1>Welcome to our Pet Store</h1>
                <p>Tìm kiếm những món đồ tốt nhất cho thú cưng của bạn tại đây.</p>
            </main>

            <Footer />
        </>
    );
}

export default App;