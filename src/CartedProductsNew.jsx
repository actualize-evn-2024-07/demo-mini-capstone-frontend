import axios from 'axios'
import { useNavigate } from "react-router-dom";


export function CartedProductsNew(props) {
  const navigate = useNavigate();

  console.log(props.product)
  const handleSubmit = (event) => {
    console.log('hellooo from handle submit')
    event.preventDefault()
    const params = new FormData(event.target)    
    axios.post("http://localhost:3000/carted_products.json", params).then(response => {
      console.log(response.data);
      // go to my_cart
      navigate("/my_cart")

    })
  }
  
  return (
    <div>
      <p>hello</p>
      <p>You will be adding {props.product.name} to your shopping cart</p>
      <p>id: {props.product.id}</p>
      <form onSubmit={handleSubmit}>
        Quantity: <input type="text" name="quantity" />
        <input type="hidden" name="product_id" defaultValue={props.product.id} />
        <button>Add to Cart</button>
      </form>
    </div>
  )
}