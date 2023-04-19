import { products  as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import './App.css'
import { useState } from 'react'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'



function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)


  return (
    <>
    <Header changeFliters={setFilters} />
    <Products  products={filteredProducts} />
    <Footer filters={filters}/>
    </>
  )
}

export default App
