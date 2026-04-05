// src/App.jsx
import { useState } from 'react';
import Header from './components/layout/Header';
import ProductCard from './components/ProductCard';
import useFetchProducts from './hooks/useFetchProducts'; // Import Service

function App() {
    // Quản lý state danh mục người dùng muốn xem
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Gọi Custom Hook và truyền State vào
    // Bất cứ khi nào selectedCategory thay đổi, Hook sẽ tự chạy lại!
    const { products, isLoading, error } = useFetchProducts(selectedCategory);

    return (
        <>
            <Header />
            <main className="main-content">

                {/* Bộ lọc UI */}
                <div style={{ marginBottom: '20px' }}>
                    <label>Lọc thú cưng: </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">Tất cả</option>
                        <option value="Dog">Chỉ hiện Chó</option>
                        <option value="Cat">Chỉ hiện Mèo</option>
                    </select>
                </div>

                {/* Xử lý UI */}
                {isLoading && <h2>Đang tìm kiếm thú cưng...</h2>}
                {error && <h2 style={{ color: 'red' }}>Lỗi: {error}</h2>}

                {!isLoading && !error && (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {products.map(pet => (
                            <ProductCard key={pet.id} {...pet} />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}

export default App;