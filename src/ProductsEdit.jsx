export function ProductsEdit(props) {
  console.log(props.product.id)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    // make params dynamic
    const params = new FormData(event.target)   
    props.onUpdateProduct(params, props.product.id) 
    // make product id dynamic
    // prefill form
    // move to products page
    // update products array with new data from api
    

  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p><b>name:</b> <input defaultValue={props.product.name} type="text" name="name" /></p>
        </div>
        <div>
          <p><b>price:</b> <input defaultValue={props.product.price} type="text" name="price" /></p>
        </div>
        <div>
          <p><b>description:</b> <input defaultValue={props.product.description} type="text" name="description" /></p>
        </div>
        <button>Update product</button>
      </form>
    </div>
  )
}