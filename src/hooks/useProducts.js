// src/hooks/useProducts.js
import { useContext } from 'react';
import productContext from '../contexts/ProductsContext';

const useProducts = () => {
  const products = useContext(productContext);
  if (!products) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return {products};
};

export default useProducts;