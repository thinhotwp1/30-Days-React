// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export default function useFetch(url) {
    // 1. Khai báo State
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Logic gọi API và dọn dẹp (Lifecycle)
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal });
                if (!response.ok) throw new Error('Lỗi kết nối đến máy chủ!');

                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        // 3. Cleanup Function chống Memory Leak
        return () => {
            controller.abort();
        };
    }, [url]); // Chạy lại nếu URL thay đổi

    // 4. Trả về một Object chứa các state cần thiết cho UI
    return { data, isLoading, error };
}