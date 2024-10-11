import { useLoaderData, useNavigate } from "react-router-dom";


export function OrdersShow() {
  const order = useLoaderData()
  console.log(order)
  return (
    <div>
      <p><b>id: </b>{order.id}</p>
      <p><b>subtotal: </b>{order.subtotal}</p>
      <p><b>total: </b>{order.total}</p>
      <p><b>tax: </b>{order.tax}</p>
      {order.carted_products.map(cp => (
        <div key={cp.id}>
          <p><b>quantity:</b>{cp.quantity}</p>
          <p><b>name:</b>{cp.product.name}</p>
          <p><b>price:</b>{cp.product.price}</p>
        </div>
      ))}
      <p>orders show</p>
    </div>
  )
}