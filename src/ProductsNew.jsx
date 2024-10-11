import {useState} from 'react'
import axios from 'axios'

export function ProductsNew(props) {
  
  const [imageUrls, setImageUrls] = useState(["", ""])
  
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

  const addImage = () => {
    console.log('here is a new image')
    setImageUrls([...imageUrls, ""]);
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
        <label htmlFor="supplier_id">Choose a car:</label>
        <select name="supplier_id" id="supplier_id">
          {props.suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>

          ))}
          
        </select>
       
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <input  type="text" name="image_urls[]" /><br />
          </div>
        ))}



        <button type="submit">Create</button>
      </form>
      <button onClick={addImage}>Add extra image</button>
    </div>
  );
}