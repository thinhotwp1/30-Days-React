// src/components/SearchWithDropdown.jsx
import {useState, useRef, useEffect} from 'react';

export default function SearchWithDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    // Tạo Ref để ôm trọn toàn bộ khu vực Search (Gồm cả Input + Dropdown)
    const containerRef = useRef(null);

    useEffect(() => {
        // Hàm xử lý khi có cú click chuột trên toàn bộ document
        const handleMouseDown = (event) => {
            // event.target là cái thẻ HTML mà chuột vừa click trúng
            // Kiểm tra: Nếu khu vực container của chúng ta KHÔNG chứa cái thẻ bị click
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false); // Đóng dropdown
            }
        };

        // Đăng ký lắng nghe sự kiện ở cấp độ Global (Window)
        document.addEventListener('mousedown', handleMouseDown);

        // DỌN DẸP (CLEANUP): Bắt buộc phải gỡ sự kiện khi Component biến mất để tránh rò rỉ bộ nhớ
        return () => document.removeEventListener('mousedown', handleMouseDown);
    }, []); // Cứ để mảng rỗng, Ref không bị đổi trong suốt vòng đời nên an toàn

    return (
        /* Gắn ref vào thẻ div bọc ngoài cùng */
        <div ref={containerRef} className="relative w-80">

            <input
                type="text"
                onFocus={() => setIsOpen(true)}
                placeholder="Gõ để tìm kiếm..."
                className="w-full p-3 border rounded-xl"
            />

            {/* Danh sách gợi ý */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-xl z-50">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pug thuần chủng</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Corgi mông to</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hạt Royal Canin</li>
                    </ul>
                </div>
            )}

        </div>
    );
}