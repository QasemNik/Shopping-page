import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import DetailsPage from './pages/DetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import PageNotFound from './pages/404'
import ProductProvider from '../src/contexts/ProductProvider'
import CartProvider from './contexts/CartProvider'
import Layout from './layouts/Layout'
import ThemeManager from './theme/DarkMod'
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  return (
    <CartProvider>
      <ProductProvider>
        <Layout>
          <ThemeManager setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
            <Routes>
              <Route path='/' element={<Navigate to="/products" replace />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/products/:id' element={<DetailsPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </ThemeManager>
        </Layout>
      </ProductProvider>
    </CartProvider>

  )
}

export default App
