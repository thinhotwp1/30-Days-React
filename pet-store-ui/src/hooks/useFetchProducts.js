// src/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';

// Nhận vào một tham số category, mặc định là 'All'
export default function useFetchProducts(category = 'All') {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchAndMapProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Giả lập gọi API (Bỏ qua signal ở đây cho code dễ đọc, nhưng thực tế vẫn nên giữ)
                const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });
                if (!response.ok) throw new Error('Không thể lấy dữ liệu sản phẩm!');

                const rawData = await response.json();

                // Lớp Service làm nhiệm vụ DATA MAPPING (DTO -> UI Model)
                let mappedProducts = rawData.map(user => ({
                    id: user.id,
                    name: "Thú cưng số " + user.id,
                    // Gán đại loại Dog/Cat dựa trên id chẵn lẻ để mock data
                    category: user.id % 2 === 0 ? 'Dog' : 'Cat',
                    price: user.id * 1500000,
                    inStock: true,
                    imageUrl: `https://images.unsplash.com/photo-1543466835-00a7907e9de1?sig=${user.id}`
                }));

                // Lớp Service làm nhiệm vụ FILTERING (Lọc theo tham số truyền vào)
                if (category !== 'All') {
                    mappedProducts = mappedProducts.filter(pet => pet.category === category);
                }

                setProducts(mappedProducts);
            } catch (err) {
                if (err.name !== 'AbortError') setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAndMapProducts();

        return () => controller.abort();

        // QUAN TRỌNG: Thêm `category` vào Dependency Array
        // Khi UI đổi category, Hook này sẽ tự động chạy lại logic lấy dữ liệu
    }, [category]);

    // UI chỉ cần nhận cục kết quả cuối cùng này
    return { products, isLoading, error };
}