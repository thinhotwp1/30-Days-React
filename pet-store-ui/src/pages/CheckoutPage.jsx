// src/pages/CheckoutPage.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // (Nhớ copy schema ở bước 2 vào đây hoặc tách file riêng)
import toast from 'react-hot-toast';

const checkoutSchema = z.object({
    fullName: z.string().min(3, "Tên phải có ít nhất 3 ký tự").max(50, "Tên không được vượt quá 50 ký tự"),
    phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
    address: z.string().min(10, "Địa chỉ quá ngắn, vui lòng nhập rõ hơn"),
});

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { cartCount, dispatch, ACTIONS } = useCart();

    // Khởi tạo React Hook Form
    const {
        register,           // Hàm dùng để "móc" input vào RHF
        handleSubmit,       // Hàm xử lý submit (tự động ngăn chặn reload trang)
        formState: { errors, isSubmitting } // Lấy ra danh sách lỗi và trạng thái submit
    } = useForm({
        resolver: zodResolver(checkoutSchema), // Kết nối với Zod DTO
    });

    // Hàm này CHỈ CHẠY khi toàn bộ form đã hợp lệ (Pass qua Zod)
    const onSubmit = async (data) => {
        // data ở đây chính là object đã được chuẩn hóa: { fullName, phone, address }
        console.log("Dữ liệu gửi lên Backend:", data);

        // Giả lập gọi API 1.5 giây
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 2. Cập nhật Toast thành Success
        console.log("Thanh toán thành công cho ${data.fullName}");
        toast.success(`Thanh toán thành công cho ${data.fullName}!`);

        dispatch({ type: ACTIONS.CLEAR_CART });
        navigate('/', { replace: true });
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4">Xác nhận Đơn hàng</h2>

            {/* Gọi handleSubmit của RHF, bọc lấy hàm onSubmit của chúng ta */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Trường Họ Tên */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và Tên</label>
                    <input
                        {...register("fullName")} // Móc input này vào RHF
                        className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                            errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                        }`}
                        placeholder="VD: Nguyễn Văn A"
                    />
                    {/* Hiển thị lỗi nếu có */}
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                {/* Trường Số Điện Thoại */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Số điện thoại</label>
                    <input
                        {...register("phone")}
                        className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                        }`}
                        placeholder="09..."
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                {/* Trường Địa Chỉ */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Địa chỉ giao hàng</label>
                    <textarea
                        {...register("address")}
                        rows="3"
                        className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                            errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                        }`}
                        placeholder="Số nhà, Đường, Quận/Huyện, Tỉnh/TP"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>

                {/* Nút Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting} // Disable nút khi đang tải API
                    className="w-full py-4 mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-xl transition-colors duration-200"
                >
                    {isSubmitting ? 'Đang xử lý...' : `Thanh toán (${cartCount} sản phẩm)`}
                </button>

            </form>
        </div>
    );
}