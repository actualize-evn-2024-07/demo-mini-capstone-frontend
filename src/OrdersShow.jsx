import { useLoaderData, useNavigate } from "react-router-dom";


export function OrdersShow() {
  const order = useLoaderData()
  
  return (
    <div>
      <p><b>id: </b>{order.id}</p>
      <p><b>subtotal: </b>{order.subtotal}</p>
      <p><b>total: </b>{order.total}</p>
      <p><b>tax: </b>{order.tax}</p>
      <p>orders show</p>
    </div>
  )
}