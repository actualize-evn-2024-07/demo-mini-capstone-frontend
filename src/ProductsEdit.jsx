import axios from "axios"

export function ProductsEdit() {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    const params = {name: "large bowl and ladel", price: 14, description: "this is more than ten characters"}
    axios.patch("http://localhost:3000/products/29.json", params).then(response => {
      console.log(response.data)
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p><b>name:</b> <input type="text" name="name" /></p>
        </div>
        <div>
          <p><b>price:</b> <input type="text" name="price" /></p>
        </div>
        <div>
          <p><b>description:</b> <input type="text" name="description" /></p>
        </div>
        <button>Update product</button>
      </form>
    </div>
  )
}