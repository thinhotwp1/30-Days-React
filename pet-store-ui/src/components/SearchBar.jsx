// src/components/SearchBar.jsx
import { useRef, useEffect } from 'react';

export default function SearchBar() {
    // 1. Tạo một cái "móc" (Pointer) rỗng
    const inputRef = useRef(null);

    useEffect(() => {
        // 3. Khi Component vừa load xong (Mount), HTML thật đã xuất hiện
        // inputRef.current lúc này chính là thẻ <input> thật của DOM
        if (inputRef.current) {
            inputRef.current.focus(); // Gọi hàm native của trình duyệt
        }
    }, []);

    return (
        <div className="relative">
            {/* 2. Gắn cái "móc" vào thẻ input */}
            <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm đồ ăn, đồ chơi..."
                className="w-full p-3 pl-10 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
    );
}