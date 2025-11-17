import Link from 'next/link';
import React from 'react'

async function page() {
    const {products} = await fetch("http://dummyjson.com/products").then(res=>res.json())
  return (
    <div>
        <h1 className='text-5xl text-green-900'>Products</h1>
        <ul className='flex flex-wrap'>
            {
                products.map((product:any)=>{
                    return <li key={product.title} className='border p-2 m-2'>
                        <Link href={`/products/${product.id}`}>{product.title}

                        <img src={`${product.thumbnail}`} alt="" />
                        </Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default page