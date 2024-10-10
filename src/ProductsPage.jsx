import { ProductsIndex } from './ProductsIndex'
import { ProductsEdit } from './ProductsEdit'
import { ProductsNew } from './ProductsNew'
import { CartedProductsNew } from './CartedProductsNew'
import { Modal } from './Modal'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLoaderData, useNavigate } from "react-router-dom";


export function ProductsPage() {
  const products = useLoaderData()
  console.log(useLoaderData())
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [isCartedProductsNewVisible, setIsCartedProductsNewVisible] = useState(false);
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

  const handleShowAddToCart = (product) => {
    console.log("handleShow", product);
    setIsCartedProductsNewVisible(true);
    setCurrentProduct(product);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleCloseCPN = () => {
    console.log("handleClose");
    setIsCartedProductsNewVisible(false);
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
      <ProductsIndex products={products} onShow={handleShow} onShowAddToCart={handleShowAddToCart} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsEdit product={currentProduct} onUpdateProduct={handleUpdateProduct} />
      </Modal>
      <Modal show={isCartedProductsNewVisible}  onClose={handleCloseCPN}>
        <CartedProductsNew product={currentProduct} />
      </Modal>
      {/* <button onClick={handleProductsIndex}>get data</button> */}
    </main>
  )
}