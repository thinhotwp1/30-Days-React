// src/App.jsx
import {useState, useEffect} from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductCard from './components/ProductCard';
import './App.css';
import useFetch from './hooks/useFetch'; // Import Custom Hook

function App() {
    // Giao diện chỉ cần ĐẶT HÀNG dữ liệu, không cần quan tâm API gọi như thế nào!
    const {
        data: users, // Đổi tên biến data thành users cho dễ hiểu
        isLoading,
        error
    } = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <Header />
            <main>
                {isLoading && <h2>Đang tải danh sách thú cưng... 🐶</h2>}
                {error && <h2 style={{color: 'red'}}>Lỗi: {error}</h2>}

                {/* Render dữ liệu khi đã fetch xong */}
                {!isLoading && !error && users && (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {users.map(user => (
                            <ProductCard
                                key={user.id}
                                name={"Pet của " + user.name}
                                price={user.id * 1000000}
                                imageUrl={`https://images.unsplash.com/photo-1543466835-00a7907e9de1?sig=${user.id}`}
                                inStock={true}
                            />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
export default App;