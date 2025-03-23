// src/hooks/useCart.js
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return [context.state, context.dispatch];
};

export default useCart;