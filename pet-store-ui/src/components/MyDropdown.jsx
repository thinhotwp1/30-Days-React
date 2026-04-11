import { useClickOutside } from '../hooks/useClickOutside';
import { useState } from 'react';

export default function MyDropdown() {
    const [isOpen, setIsOpen] = useState(false); // <--- Lỗi xảy ra ở đây vì chưa import

    // Code sạch bong!
    const dropdownRef = useClickOutside(() => setIsOpen(false));

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Tùy chọn
                </button>
            </div>

            {isOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cài đặt</p>
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hỗ trợ</p>
                    </div>
                </div>
            )}
        </div>
    );
}