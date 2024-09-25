import { ProductsIndex } from './ProductsIndex'
import {useState} from 'react'

export function ProductsPage() {
  const [products, setProducts] = useState([{id: 1, name: "First"}, {id: 2, name: "second"}])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </main>
  )
}