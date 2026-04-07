import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 1. Khởi tạo một API Service
export const petFoodApi = createApi({
    reducerPath: 'petFoodApi', // Tên định danh trong Redux Store

    // 2. Cấu hình Base URL (Giống @RequestMapping ở mức Class)
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }), // Dùng API giả lập

    // 3. Định nghĩa các Endpoints (Giống @GetMapping, @PostMapping)
    endpoints: (builder) => ({
        // Lấy danh sách thức ăn
        getPetFoods: builder.query({
            query: () => 'products/category/groceries', // Endpoint cụ thể

            // Transform response giúp biến đổi dữ liệu Backend trả về thành format UI cần (DTO Mapping)
            transformResponse: (response) => {
                return response.products.map(item => ({
                    id: item.id,
                    name: item.title,
                    price: item.price * 25000, // Đổi USD sang VNĐ giả lập
                    imageUrl: item.thumbnail
                }));
            }
        }),
    }),
});

// PHÉP THUẬT CỦA RTK QUERY: Tự động sinh ra Custom Hook dựa trên tên endpoint!
// getPetFoods -> useGetPetFoodsQuery
export const { useGetPetFoodsQuery } = petFoodApi;