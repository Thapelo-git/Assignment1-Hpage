import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoritesProvider } from './contexts/WishlistContext';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <FavoritesProvider>
     <App/>
     </FavoritesProvider>
    </React.StrictMode>
  );
} else {
  console.error("❌ No #root element found!");
}
