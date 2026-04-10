// src/components/ConfirmModal.jsx
export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
    // Nếu isOpen = false, không render gì cả (trả về null)
    if (!isOpen) return null;

    return (
        // Lớp mờ (Overlay) bao phủ toàn màn hình
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm">

            {/* Khối Modal màu trắng ở giữa */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-6">{message}</p>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        Xóa luôn!
                    </button>
                </div>
            </div>

        </div>
    );
}