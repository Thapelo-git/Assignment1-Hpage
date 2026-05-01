import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoritesProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CartProvider>
        <FavoritesProvider>
          <App/>
        </FavoritesProvider>
      </CartProvider>
    </React.StrictMode>
  );
} else {
  console.error("❌ No #root element found!");
}
