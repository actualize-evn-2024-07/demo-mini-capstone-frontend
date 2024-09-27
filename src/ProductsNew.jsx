import axios from 'axios'

export function ProductsNew() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // collect params from the form
    const params = new FormData(event.target)
    // make axios request
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data)
    })
    console.log('handling submit')
  }
  
  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          price: <input name="price" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          supplier_id: <input name="supplier_id" type="text" />
        </div>
        <label>Item 1:</label>
        <input type="text" name="image_urls[]" /><br />

        <label>Item 2:</label>
        <input type="text" name="image_urls[]" /><br />

        <label>Item 3:</label>
        <input type="text" name="image_urls[]" /><br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}