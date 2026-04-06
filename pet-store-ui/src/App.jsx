// src/App.jsx
import Header from './components/layout/Header';
import Footer from "./components/layout/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProductsPage from "./pages/ProductsPage.jsx"; // <-- Bổ sung dòng này

function App() {
    return (
        <CartProvider>
            <Header />
            <main>
                <ProductsPage />
            </main>
            <Footer />
        </CartProvider>
    );
}

export default App;