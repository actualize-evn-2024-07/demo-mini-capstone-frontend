export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <h1>All Products</h1>
      {/* {JSON.stringify(props.products)} */}
      {props.products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          {/* <p>{JSON.stringify(product.images[0].url)}</p> */}
          {/* <p>{product.images[0] && product.images[0].url}</p> */}
          {/* <img src={product.images_with_default[0] && product.images_with_default[0].url} /> */}
          {product.images_with_default.map(image => (
            <img key={image.id} src={image.url} />
          ))}
          {/* <img src={product.friendly_image} /> */}
          <br />
          <button onClick={() => props.onShow(product)}>Edit this product</button>          
          <button onClick={() => props.onShowAddToCart(product)}>Add to cart</button>          
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      ))}
      
    </div>
  );
}