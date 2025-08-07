import React, { useEffect, useState } from 'react'
import cart from './cart';
import { Link } from 'react-router';
const CartTotal = () => {
    const [Total , setTotal] = useState(0);
    useEffect(function() {
        let sum=0;
        for(let i = 0; i < cart.length; i++) {
            sum+= cart[i].price;
        }
        setTotal(sum);
        console.log("Total:", Total);
    },[cart.length , ])
    
  return (
    <div className='my-10 border-1  border-gray-300'>
      <div className='flex items-center mx-auto w-[300px] md:w-[30vw] pl-3 h-13  border-gray-300 text-gray-600 bg-gray-200 font-semibold'> Cart Total</div>
      <div className='flex flex-col'>
        <p className='ml-10  md:ml-10 w-20'>Subtotal<span className='ml-3 ml-[8.7vw]'>${Total}</span></p>
        <div className='h-[0.5px] my-4 self-center w-[80%] bg-gray-500'></div>
        <p className='ml-10 w-20'>Total<span className=' ml-[70px] md:ml-[11vw]'>${Total}</span></p>
        <div className='h-[0.5px] my-4 self-center w-[80%] bg-gray-500'></div>
        <Link className='w-[80%] self-center bg-orange-600 h-10 text-white rounded text-center mb-3 text-[11px] md:text-xl'><p className='justify-self-center mt-2'>PROCEED TO CHECKOUT</p></Link>
      </div>

    </div>
  )
}

export default CartTotal
