import React from 'react'
import { Link } from 'react-router'
const Product = (info) => {
  return (
    <div className='w-[120px] h-[250px] md:w-[310px] md:h-[420px] shadow m-7  flex flex-col p-2'>
      <img className='w-[100%] object-cover h-[50%] md:h-[300px] object-contain' src= {info.img} alt="" />
      <p className='text-gray-400 text-xs'>{info.category}</p>
      <h1 className='font-bold'>{info.title}</h1>
      <p>${info.price}</p>
      <Link to={`/productDetails/${info.id}`}  className='underline font-semibold'>View Details</Link>
    </div>
  )
}

export default Product
