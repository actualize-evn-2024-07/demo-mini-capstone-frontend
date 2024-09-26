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
          <img src={product.images[0] && product.images[0].url} />
        </div>
      ))}
    </div>
  );
}