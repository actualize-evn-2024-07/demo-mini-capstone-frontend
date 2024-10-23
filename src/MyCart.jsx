import { useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios'
import Stripe from 'stripe'

export function MyCart() {
  const stripe = Stripe(import.meta.env.VITE_APP_STRIPE_API_KEY);

  const cartedProducts = useLoaderData()
  const navigate = useNavigate()
  console.log(cartedProducts);
  
  const purchase = () => {

    console.log('purchase');
    axios.post("http://localhost:3000/orders.json").then(response => {
      console.log(response.data)
      // navigate(`/orders/${response.data.id}`)
      stripe.checkout.sessions.create({        
        mode: 'payment',
        payment_method_types: [
          'card',
        ],
        success_url: `http://localhost:5173/orders/${response.data.id}`,
        cancel_url: `http://localhost:5173/orders/${response.data.id}`,
        line_items: [ // all arguments are required
          {
            price_data: {
              unit_amount: response.data.total * 100,
              currency: 'usd',
              product_data: {
                name: 'best shopping cart experience ever'
              },
            },
            quantity: 1,
          },
        ],
      }).then(session => {
        console.log(session)
        window.location.href = session.url
      })
    })
  }
  
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
      <button onClick={purchase}>Purchase</button>
    </div>
  )
}