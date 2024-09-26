import { ProductsIndex } from './ProductsIndex'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function ProductsPage() {
  const [products, setProducts] = useState([])

  const handleProductsIndex = () => {
    console.log('in products index')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }

  useEffect(handleProductsIndex, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
      {/* <button onClick={handleProductsIndex}>get data</button> */}
    </main>
  )
}