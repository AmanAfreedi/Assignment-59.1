import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <div className='flex flex-wrap w-[100%]  justify-center'>
      {products.map(function(item){
        return <Product title={item.title} price={item.price} category={item.category} img={item.img} id={item.id} />
      })}
    </div>
  )
}

export default ProductList
