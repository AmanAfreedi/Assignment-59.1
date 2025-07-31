import React, { useState } from 'react'

const CartRow = (props) => {
    const [num , setNum]=useState(1);
    function handleChange(event){
        const val = event.target.value;
        setNum(val);
    }
  return (
    <div className='flex w-[70vw] items-center border-[1px] mb-[2px] border-gray-300'  >
      <img className='w-20 h-20 ml-[6vw] mr-[5vw] ' src={props.img} alt="" />
      <h1 className='w-[26vw] text-orange-600 font-bold '>{props.title}</h1>
      <p className='w-[8vw] font-bold'>${props.price}</p>
      <input className='border-[1px] mr-[8vw] rounded w-10 h-10 pl-3'value={num} onChange={handleChange} type="number" />
      <p className='font-bold'>${num*props.price}</p>
    </div>
  )
}

export default CartRow
