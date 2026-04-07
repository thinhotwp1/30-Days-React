// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom'; // Import Router

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <CartProvider>
                {/* Kích hoạt History API cho toàn ứng dụng */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartProvider>
        </Provider>
    </React.StrictMode>
);