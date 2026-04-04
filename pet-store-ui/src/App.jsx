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

    useEffect(() => {
        // Giả lập gọi API
        const fetchPets = async () => {
            try {
                setIsLoading(true);
                // Trong thực tế sẽ là: fetch('http://localhost:8080/api/pets')
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                console.log(data);

                // Map lại dữ liệu API sang format của Pet Store
                const formattedData = data.map(user => ({
                    id: user.id,
                    name: "Pet của " + user.name,
                    price: user.id * 1000000,
                    inStock: true,
                    imageUrl: `https://images.unsplash.com/photo-1543466835-00a7907e9de1?sig=${user.id}`
                }));

                setProducts(formattedData);
            } catch (err) {
                setError("Không thể tải danh sách thú cưng.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPets();
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