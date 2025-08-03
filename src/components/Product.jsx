import React from 'react'
import { Link } from 'react-router'
const Product = (info) => {
  return (
    <div className='w-[120px] overflow-hidden h-[450px] md:max-w-[380px] md:h-auto w-auto m-3  flex flex-col p-2'>
      <img className='aspect-square md:object-contain border-[0.1px] border-gray-300' src= {info.img} alt="" />
      <p className='text-gray-400 text-xs'>{info.category}</p>
      <h1 className='font-bold'>{info.title}</h1>
      <p>${info.price}</p>
      <Link to={`/productDetails/${info.id}`}  className='underline font-semibold'>View Details</Link>
    </div>
  )
}

export default Product
