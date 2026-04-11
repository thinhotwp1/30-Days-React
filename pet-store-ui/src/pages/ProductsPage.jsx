// src/pages/ProductsPage.jsx
import PetFoodList from '../components/PetFoodList';
import MyDropdown from "../components/MyDropdown";

export default function ProductsPage() {
    return (
        <div>
            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Danh mục Sản phẩm
            </h2>

            {/* Gọi Component đã có tích hợp sẵn RTK Query ở bài trước */}
            <PetFoodList />
            <MyDropdown />

            {/* Nếu bạn vẫn giữ ProductCard (thú cưng) từ Ngày 8, bạn có thể gọi thêm ở đây */}
        </div>
    );
}