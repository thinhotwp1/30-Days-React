// src/components/PetFoodList.jsx
import { useGetPetFoodsQuery } from '../services/petFoodApi';
import { useCart } from '../context/CartContext'; // 1. Import Custom Hook của Giỏ hàng

export default function PetFoodList() {
    const { data: foods, isLoading, isError, error } = useGetPetFoodsQuery();

    // 2. Lấy vũ khí dispatch và danh sách ACTIONS từ Context
    const { dispatch, ACTIONS } = useCart();

    if (isLoading) return <h2>Đang nấu đồ ăn cho Pet... 🍲</h2>;
    if (isError) return <h2 style={{color: 'red'}}>Lỗi server: {error.error}</h2>;

    return (
        <div className="max-w-7xl mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-teal-400 inline-block pb-2">
                Gian hàng Thức ăn
            </h2>

            {/* Grid System của Tailwind: Tự động responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {foods?.map((food) => (
                    // Thẻ Card với hiệu ứng Hover mượt mà
                    <div key={food.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
                        <img src={food.imageUrl} alt={food.name} className="w-full h-48 object-cover" />

                        <div className="p-5 flex-1 flex flex-col">
                            <h4 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h4>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{food.description}</p>

                            {/* Đẩy giá và nút bấm xuống cuối thẻ */}
                            <div className="mt-auto">
                                <p className="text-2xl font-extrabold text-teal-600 mb-4">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(food.price)}
                                </p>
                                <button
                                    onClick={() => dispatch({ type: ACTIONS.ADD_ITEM, payload: food })}
                                    className="w-full py-3 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-bold rounded-xl transition-colors duration-200"
                                >
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}