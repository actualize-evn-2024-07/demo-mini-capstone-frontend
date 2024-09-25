export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <h1>All Products</h1>
      {/* {JSON.stringify(props.products)} */}
      {props.products.map(product => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  );
}