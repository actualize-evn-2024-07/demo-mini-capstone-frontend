import { useLoaderData, useNavigate } from "react-router-dom";

export function MyCart() {
  const cartedProducts = useLoaderData()
  console.log(cartedProducts);
  
  
  
  // get data from rails
  // display data to user
  
  return (
    <div>
      <p>the items in my shopping cart</p>
      {cartedProducts.map(cp => (
        <div key={cp.id}>
          <p>Name: {cp.product.name}</p>
          <p>price: {cp.product.price}</p>
          <p>quantity: {cp.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}