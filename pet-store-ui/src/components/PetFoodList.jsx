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
        <div>
            <h2>Gian hàng Thức ăn</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {foods?.map((food) => (
                    <div key={food.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                        <img src={food.imageUrl} alt={food.name} style={{ width: '100%' }} />
                        <h4>{food.name}</h4>
                        <p>{food.description}</p>
                        <p style={{ color: 'green', fontWeight: 'bold' }}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(food.price)}
                        </p>

                        {/* 3. Bắn tín hiệu ADD_ITEM kèm theo dữ liệu món ăn vào Reducer */}
                        <button
                            onClick={() => dispatch({ type: ACTIONS.ADD_ITEM, payload: food })}
                            style={{ padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', marginTop: '10px' }}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}