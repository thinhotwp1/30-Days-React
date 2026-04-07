// src/App.jsx
import Header from './components/layout/Header';
import AdminLogin from './components/AdminLogin';
import PetFoodList from "./components/PetFoodList.jsx";
// Nếu bạn để AdminLogin ở thư mục khác thì nhớ sửa lại đường dẫn import cho đúng nhé

function App() {
    return (
        <div>
            {/* Gọi Header để nó đọc dữ liệu từ Redux Store */}
            <Header />

            <main style={{ padding: '20px' }}>
                <PetFoodList />
            </main>
        </div>
    );
}

export default App;