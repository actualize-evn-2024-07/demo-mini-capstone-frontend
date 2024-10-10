import { ProductsIndex } from './ProductsIndex'
import { ProductsEdit } from './ProductsEdit'
import { ProductsNew } from './ProductsNew'
import { Modal } from './Modal'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLoaderData, useNavigate } from "react-router-dom";


export function ProductsPage() {
  const products = useLoaderData()
  console.log(useLoaderData())
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});


  // const handleProductsIndex = () => {
  //   console.log('in products index')
  //   axios.get("http://localhost:3000/products.json").then(response => {
  //     console.log(response.data)
  //     setProducts(response.data)
  //   })
  // }

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (params, id) => {
    console.log('handling update product')
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      console.log(response.data)
      // update the products array
      setProducts(products.map(product => {
        if (product.id !== id) {
          return product
        } else {
          return response.data;
        }
      }))
      handleClose();

    })
  }

  // useEffect(handleProductsIndex, [])
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsNew />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsEdit product={currentProduct} onUpdateProduct={handleUpdateProduct} />
      </Modal>
      {/* <button onClick={handleProductsIndex}>get data</button> */}
    </main>
  )
}