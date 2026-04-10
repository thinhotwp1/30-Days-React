import { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import toast from 'react-hot-toast';

export default function AdminProducts() {
    // State quản lý việc đóng/mở Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // Lưu ID món cần xóa

    const handleDeleteClick = (id) => {
        setSelectedItem(id);
        setIsModalOpen(true); // Bật Modal lên
    };

    const confirmDelete = () => {
        // Gọi API xóa ở đây (ví dụ: dùng RTK Query deleteMutation)
        toast.success(`Đã xóa thành công sản phẩm #${selectedItem}`);
        setIsModalOpen(false); // Xóa xong thì tắt Modal
    };

    return (
        <div>
            <h2>Quản lý Sản Phẩm</h2>
            {/* Giả sử có một item ở đây */}
            <div className="flex justify-between items-center p-4 border rounded">
                <span>Hạt Royal Canin (ID: 101)</span>
                <button onClick={() => handleDeleteClick(101)} className="text-red-500 font-bold">Xóa</button>
            </div>

            {/* Gọi Component Modal ra */}
            <ConfirmModal
                isOpen={isModalOpen}
                title="Cảnh báo nguy hiểm"
                message="Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa sản phẩm này khỏi hệ thống?"
                onCancel={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
            />
        </div>
    );
}