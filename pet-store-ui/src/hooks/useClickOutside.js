import { useEffect, useRef } from 'react';

// Nhận vào 1 hàm (callback) sẽ chạy khi click ra ngoài
export function useClickOutside(handler) {
    const domNode = useRef(null);

    useEffect(() => {
        const eventListener = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', eventListener);
        return () => document.removeEventListener('mousedown', eventListener);
    }, [handler]);

    return domNode; // Trả về cái móc để Component sử dụng
}