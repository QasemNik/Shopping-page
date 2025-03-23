import { useEffect, useState } from 'react'
import api from '../services/config'
import ProductContext from './ProductsContext'

export default function ProductProvider({ children }) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await api.get('/products');
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts()

    }, [])

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}
