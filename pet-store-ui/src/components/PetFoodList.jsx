// src/components/PetFoodList.jsx
import { useGetPetFoodsQuery } from '../services/petFoodApi';

export default function PetFoodList() {
    // Hook tự động cung cấp mọi trạng thái bạn cần!
    const { data: foods, isLoading, isError, error } = useGetPetFoodsQuery();

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
                        <p style={{ color: 'green' }}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(food.price)}
                        </p>
                        <button>Mua ngay</button>
                    </div>
                ))}
            </div>
        </div>
    );
}