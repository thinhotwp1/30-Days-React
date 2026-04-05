// src/App.jsx
import {useState, useEffect} from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State quản lý trạng thái chờ
    const [error, setError] = useState(null);
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        // 1. Khởi tạo một "Công tắc" để có thể hủy request API
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchPets = async () => {
            try {
                setIsLoading(true);
                // 2. Gắn "Công tắc" vào request
                await delay(2000);
                const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
                const data = await response.json();

                const formattedData = data.map(user => ({
                    id: user.id,
                    name: "Pet của " + user.name,
                    price: user.id * 1000000,
                    inStock: true,
                    imageUrl: `https://images.unsplash.com/photo-1543466835-00a7907e9de1?sig=${user.id}`
                }));

                setProducts(formattedData);
            } catch (err) {
                // 3. Xử lý trường hợp bị ép hủy (Không phải lỗi server)
                if (err.name === 'AbortError') {
                    console.log('Request API đã bị hủy do Component bị Unmount!');
                } else {
                    setError("Không thể tải danh sách thú cưng.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchPets();

        // 4. CLEANUP FUNCTION (Hàm Destroy)
        // React sẽ TỰ ĐỘNG gọi hàm này khi người dùng rời khỏi trang
        return () => {
            console.log('Tiến hành dọn dẹp: Hủy request API đang chạy dở...');
            controller.abort(); // Bấm công tắc hủy request ngay lập tức
        };
    }, []); // Chạy 1 lần duy nhất khi load trang

    return (
        <>
            <Header />
            <main>
                {/* Conditional Rendering cho trạng thái Loading */}
                {isLoading && <h2>Đang tải dữ liệu thú cưng...</h2>}
                {error && <h2 style={{color: 'red'}}>{error}</h2>}

                {!isLoading && !error && (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {products.map(pet => (
                            <ProductCard key={pet.id} {...pet} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;