import React, { useState } from 'react'

const CartRow = (props) => {
    const [num , setNum]=useState(1);
    function handleChange(event){
        const val = event.target.value;
        setNum(val);
    }
  return (
    <div className='flex overflow-hidden md:w-[70vw] items-center border-[1px] mb-[2px] border-gray-300'  >
      <img className='w-15 h-15 md:w-20 md:h-20 md:ml-[6vw] md:mr-[5vw] ' src={props.img} alt="" />
      <div className='w-[70px] md:w-auto'><h1 className='mr-2 text-[13px] md:w-[26vw] md:text-xl text-orange-600 md:font-bold '>{props.title}</h1></div>
      <p className='w-[8vw] font-bold'>${props.price}</p>
      <input className='ml-10 mr-2 border-[1px] md:mr-[8vw] rounded w-10 h-10 pl-3'value={num} onChange={handleChange} type="number" />
      <p className='font-bold ml-2 md:m-0'>${num*props.price}</p>
    </div>
  )
}

export default CartRow
