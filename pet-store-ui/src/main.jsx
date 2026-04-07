// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Import store của bạn

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Bọc toàn bộ App bằng Provider để cung cấp Redux Store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);