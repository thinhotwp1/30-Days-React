import {useState} from 'react';

export default function AddProductForm({onAddProduct}) {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Dog',
        price: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData || !formData.price) {
            alert("Please fill all the fields");
            return;
        }
        const newProduct = {
            id: 'p_' + Date.now(),
            name: formData.name,
            category: formData.category,
            price: Number(formData.price),
            inStock: true.valueOf(),
            imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop' // Ảnh placeholder
        };
        onAddProduct(newProduct);
        setFormData({name: '', category: 'Dog', price: ''})
    }
    return (
        <form onSubmit={handleSubmit}
              style={{border: '2px dashed #007bff', padding: '20px', marginBottom: '30px', borderRadius: '8px'}}>
            <h2>Thêm Thú Cưng Mới</h2>

            <div style={{marginBottom: '10px'}}>
                <label>Tên thú cưng: </label>
                {/* value gắn với state, onChange gọi hàm cập nhật */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div style={{marginBottom: '10px'}}>
                <label>Loài: </label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="Dog">Chó</option>
                    <option value="Cat">Mèo</option>
                    <option value="Bird">Chim</option>
                </select>
            </div>

            <div style={{marginBottom: '10px'}}>
                <label>Giá (VNĐ): </label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" style={{
                background: '#28a745',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer'
            }}>
                + Thêm vào cửa hàng
            </button>
        </form>
    );
}