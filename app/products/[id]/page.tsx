

import React from 'react'
async function ProductPage(props) {
    const {id} = await props.params;
    const product = await fetch(`http://dummyjson.com/products/${id}`).then(res=>res.json())
    console.log(product);
  return (
    <div>
      <h1 className="text-3xl">
        {product.title}
      </h1>
      <img src={`${product.thumbnail}`} alt="" />
    </div>
  )
}

export default ProductPage