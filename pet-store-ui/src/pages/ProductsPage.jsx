// src/pages/ProductsPage.jsx
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { products, isLoading, error } = useFetchProducts(selectedCategory);

    return (
        <>
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

            {isLoading && <h2>Đang tìm kiếm thú cưng...</h2>}
            {error && <h2 style={{ color: 'red' }}>Lỗi: {error}</h2>}

            {!isLoading && !error && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {products.map(pet => (
                        // Truyền nguyên object pet xuống Card để dễ xử lý Context
                        <ProductCard key={pet.id} product={pet} />
                    ))}
                </div>
            )}
        </>
    );
}