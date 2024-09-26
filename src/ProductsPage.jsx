import { ProductsIndex } from './ProductsIndex'
import { ProductsEdit } from './ProductsEdit'
import { Modal } from './Modal'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function ProductsPage() {
  const [products, setProducts] = useState([])
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});


  const handleProductsIndex = () => {
    console.log('in products index')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }

  const handleShow = (photo) => {
    console.log("handleShow", photo);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
  };

  useEffect(handleProductsIndex, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <ProductsEdit />
      </Modal>
      {/* <button onClick={handleProductsIndex}>get data</button> */}
    </main>
  )
}