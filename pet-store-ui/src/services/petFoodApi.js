// src/services/petFoodApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petFoodApi = createApi({
    reducerPath: 'petFoodApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

    // 1. Khai báo danh sách các loại Nhãn dán sẽ dùng trong API này
    tagTypes: ['PetFood'],

    endpoints: (builder) => ({
        // ---- LỆNH READ (GET) ----
        getPetFoods: builder.query({
            query: () => 'products/category/groceries',

            // 2. Dán nhãn 'PetFood' cho giỏ dữ liệu này khi lưu vào Cache
            providesTags: ['PetFood'],

            transformResponse: (response) => response.products,
        }),

        // ---- LỆNH WRITE (POST/PUT/DELETE) ----
        addPetFood: builder.mutation({
            // Giả lập gọi API POST để thêm đồ ăn mới
            query: (newFood) => ({
                url: 'products/add',
                method: 'POST',
                body: newFood,
            }),

            // 3. PHÉP THUẬT NẰM Ở ĐÂY:
            // Khi lệnh POST này thành công, tự động "xé bỏ" cái Cache có nhãn 'PetFood'
            invalidatesTags: ['PetFood'],
        }),
    }),
});

// RTK Query tự sinh thêm Hook cho Mutation
export const { useGetPetFoodsQuery, useAddPetFoodMutation } = petFoodApi;